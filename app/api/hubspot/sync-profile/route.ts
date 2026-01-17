import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      email,
      firstname,
      lastname,
      phone,
      current_level,
      total_lessons_completed,
      total_study_minutes,
      average_score,
      current_streak,
      last_activity_date,
      learning_goals,
      timezone,
      language_proficiency,
    } = body;

    const hubspotApiKey = process.env.HUBSPOT_API_KEY;

    if (!hubspotApiKey) {
      return NextResponse.json(
        { success: false, error: 'HubSpot API key not configured' },
        { status: 500 }
      );
    }

    // Prepare properties
    const properties: Record<string, any> = {
      email,
      firstname: firstname || '',
      lastname: lastname || '',
    };

    // Add optional properties
    if (phone) properties.phone = phone;
    if (current_level) properties.current_level = current_level;
    if (total_lessons_completed !== undefined) properties.total_lessons_completed = String(total_lessons_completed);
    if (total_study_minutes !== undefined) properties.total_study_minutes = String(total_study_minutes);
    if (average_score !== undefined) properties.average_score = String(average_score);
    if (current_streak !== undefined) properties.current_streak = String(current_streak);
    if (last_activity_date) properties.last_activity_date = last_activity_date;
    if (learning_goals) properties.learning_goals = learning_goals;
    if (timezone) properties.timezone = timezone;
    if (language_proficiency) properties.language_proficiency = language_proficiency;

    // First, search for existing contact
    const searchResponse = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts/search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${hubspotApiKey}`,
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'email',
                  operator: 'EQ',
                  value: email,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!searchResponse.ok) {
      const errorData = await searchResponse.json();
      return NextResponse.json(
        { success: false, error: 'Failed to search contact', details: errorData },
        { status: 500 }
      );
    }

    const searchResult = await searchResponse.json();

    let contactId: string;
    let isNewContact = false;

    if (searchResult.results && searchResult.results.length > 0) {
      // Update existing contact
      contactId = searchResult.results[0].id;

      const updateResponse = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${hubspotApiKey}`,
          },
          body: JSON.stringify({ properties }),
        }
      );

      if (!updateResponse.ok) {
        const errorData = await updateResponse.json();
        return NextResponse.json(
          { success: false, error: 'Failed to update contact', details: errorData },
          { status: 500 }
        );
      }
    } else {
      // Create new contact
      isNewContact = true;
      properties.lifecyclestage = 'lead';
      properties.hs_lead_status = 'NEW';

      const createResponse = await fetch(
        'https://api.hubapi.com/crm/v3/objects/contacts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${hubspotApiKey}`,
          },
          body: JSON.stringify({ properties }),
        }
      );

      if (!createResponse.ok) {
        const errorData = await createResponse.json();
        return NextResponse.json(
          { success: false, error: 'Failed to create contact', details: errorData },
          { status: 500 }
        );
      }

      const createResult = await createResponse.json();
      contactId = createResult.id;
    }

    return NextResponse.json({
      success: true,
      contactId,
      isNewContact,
      message: isNewContact ? 'Contact created in HubSpot' : 'Contact updated in HubSpot',
    });
  } catch (error) {
    console.error('Error in HubSpot sync:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
