interface HubSpotContact {
  email: string;
  firstname: string;
  lastname?: string;
  phone?: string;
  course_interest?: string;
  current_level?: string;
  message?: string;
}

export async function createHubSpotContact(contactData: HubSpotContact) {
  const hubspotApiKey = process.env.HUBSPOT_API_KEY;
  
  if (!hubspotApiKey) {
    console.warn('HubSpot API key not configured. Skipping CRM integration.');
    return { success: false, error: 'CRM not configured' };
  }

  try {
    const properties = {
      email: contactData.email,
      firstname: contactData.firstname,
      lastname: contactData.lastname || '',
      phone: contactData.phone || '',
      course_interest: contactData.course_interest || '',
      current_level: contactData.current_level || '',
      hs_lead_status: 'NEW',
      lifecyclestage: 'lead',
    };

    // Add custom message as a note
    const response = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${hubspotApiKey}`,
        },
        body: JSON.stringify({ properties }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('HubSpot API error:', errorData);
      return { success: false, error: errorData };
    }

    const result = await response.json();
    console.log('Contact created in HubSpot:', result.id);

    // If there's a message, add it as a note
    if (contactData.message && result.id) {
      await addNoteToContact(result.id, contactData.message);
    }

    return { success: true, contactId: result.id };
  } catch (error) {
    console.error('Error creating HubSpot contact:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

async function addNoteToContact(contactId: string, message: string) {
  const hubspotApiKey = process.env.HUBSPOT_API_KEY;
  
  try {
    const response = await fetch(
      'https://api.hubapi.com/crm/v3/objects/notes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${hubspotApiKey}`,
        },
        body: JSON.stringify({
          properties: {
            hs_note_body: message,
          },
          associations: [
            {
              to: { id: contactId },
              types: [
                {
                  associationCategory: 'HUBSPOT_DEFINED',
                  associationTypeId: 202, // Note to Contact
                },
              ],
            },
          ],
        }),
      }
    );

    if (response.ok) {
      console.log('Note added to HubSpot contact');
    }
  } catch (error) {
    console.error('Error adding note to HubSpot contact:', error);
  }
}

export async function updateContactProperty(
  email: string,
  property: string,
  value: string
) {
  const hubspotApiKey = process.env.HUBSPOT_API_KEY;
  
  if (!hubspotApiKey) {
    return { success: false, error: 'CRM not configured' };
  }

  try {
    // First, search for the contact by email
    const searchResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/search`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${hubspotApiKey}`,
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
      return { success: false, error: 'Contact not found' };
    }

    const searchResult = await searchResponse.json();
    
    if (searchResult.results.length === 0) {
      return { success: false, error: 'Contact not found' };
    }

    const contactId = searchResult.results[0].id;

    // Update the contact
    const updateResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${hubspotApiKey}`,
        },
        body: JSON.stringify({
          properties: {
            [property]: value,
          },
        }),
      }
    );

    if (!updateResponse.ok) {
      return { success: false, error: 'Failed to update contact' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error updating HubSpot contact:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
