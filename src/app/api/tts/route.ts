import { NextRequest, NextResponse } from 'next/server';

function stripMarkup(text: string): string {
  return text.replace(/\[\[([^\|]+)\|[^\]]+\]\]/g, '$1');
}

const FEMALE_NAMES = new Set([
  'sara', 'maria', 'ana', 'lucia', 'elena', 'sofia', 'laura', 'marta', 'paula', 'isabel',
  'carmen', 'pilar', 'nuria', 'patricia', 'beatriz', 'raquel', 'natalia', 'silvia', 'irene', 'eva',
  'rosa', 'claudia', 'diana', 'susana', 'yolanda', 'monica', 'alicia', 'miriam', 'cristina', 'vera',
  'emma', 'olivia', 'ava', 'isabella', 'sophia', 'mia', 'charlotte', 'amelia', 'harper', 'evelyn',
  'abigail', 'emily', 'elizabeth', 'ella', 'avery', 'camila', 'aria', 'scarlett', 'victoria',
  'madison', 'luna', 'grace', 'chloe', 'penelope', 'layla', 'riley', 'zoey', 'nora', 'lily',
  'eleanor', 'hannah', 'lillian', 'addison', 'aubrey', 'ellie', 'stella', 'natalie', 'zoe',
  'leah', 'hazel', 'violet', 'aurora', 'savannah', 'audrey', 'brooklyn', 'bella', 'claire',
  'skylar', 'lucy', 'anna', 'caroline', 'maya', 'willow', 'naomi', 'ariana', 'valentina',
  'gabriella', 'alice', 'andrea', 'sarah', 'jessica', 'ashley', 'amanda', 'stephanie', 'melissa',
  'jennifer', 'lisa', 'rachel', 'nancy', 'helen', 'margaret', 'sandra', 'linda', 'barbara',
  'judith', 'jane', 'amy', 'angela', 'brenda', 'kathleen', 'pamela', 'martha', 'gloria',
  'tina', 'dana', 'wendy', 'holly', 'teresa', 'shirley', 'kate', 'katie', 'kim', 'kelly',
  'karen', 'donna', 'carol', 'ruth', 'sharon', 'susan', 'mary', 'betty', 'dorothy', 'deborah',
]);

const MALE_NAMES = new Set([
  'carlos', 'juan', 'miguel', 'antonio', 'jose', 'david', 'pablo', 'pedro', 'alejandro',
  'francisco', 'manuel', 'jesus', 'ivan', 'rafael', 'sergio', 'mario', 'jorge', 'alberto',
  'roberto', 'rodrigo', 'javier', 'angel', 'fernando', 'oscar', 'ruben', 'marcos', 'victor',
  'raul', 'andres', 'diego', 'guillermo', 'santiago', 'martin', 'emilio', 'arturo', 'alfredo',
  'armando', 'ernesto', 'gerardo', 'gustavo', 'hector', 'jaime', 'joaquin', 'julio', 'luis',
  'ignacio', 'matias', 'nicolas', 'tomas', 'alonso', 'gonzalo', 'hugo', 'luca', 'marco',
  'james', 'john', 'robert', 'michael', 'william', 'richard', 'joseph', 'thomas', 'charles',
  'christopher', 'daniel', 'matthew', 'anthony', 'mark', 'donald', 'steven', 'paul', 'andrew',
  'joshua', 'kenneth', 'kevin', 'brian', 'george', 'timothy', 'ronald', 'edward', 'jason',
  'jeffrey', 'ryan', 'jacob', 'gary', 'nicholas', 'eric', 'jonathan', 'stephen', 'larry',
  'justin', 'scott', 'brandon', 'benjamin', 'samuel', 'raymond', 'gregory', 'frank', 'alexander',
  'patrick', 'jack', 'dennis', 'jerry', 'tyler', 'aaron', 'adam', 'nathan', 'henry', 'zachary',
  'douglas', 'peter', 'kyle', 'noah', 'ethan', 'jeremy', 'christian', 'walter', 'keith',
  'austin', 'roger', 'terry', 'sean', 'gerald', 'carl', 'harold', 'dylan', 'arthur', 'jordan',
  'jesse', 'joe', 'bryan', 'billy', 'bruce', 'gabriel', 'logan', 'albert', 'alan', 'wayne',
  'elijah', 'randy', 'roy', 'vincent', 'ralph', 'eugene', 'russell', 'bobby', 'mason', 'philip',
  'louis', 'lucas', 'liam', 'oliver', 'aiden', 'sebastian', 'mateo', 'jackson', 'owen', 'leo',
  'julian', 'isaac', 'asher', 'carter', 'wyatt', 'josiah', 'lincoln', 'miles', 'eli', 'nolan',
  'jaxon', 'ezra', 'micah', 'roman', 'damian', 'colton', 'silas', 'theo', 'felix', 'tucker',
  'cooper', 'kai', 'alex', 'tom', 'jake', 'ben', 'sam', 'max', 'chris', 'nick', 'matt',
  'mike', 'jim', 'dan', 'rob', 'jon', 'will', 'steve', 'charlie', 'rick', 'dave', 'bob', 'luke',
  'brad', 'derek', 'greg', 'omar', 'ravi', 'raj', 'arjun', 'wei', 'ming', 'jun', 'zhang',
]);

function detectGender(text: string): 'male' | 'female' {
  const lower = text.toLowerCase();
  const nameMatch = lower.match(/(?:my name is|i'm|i am|soy|me llamo|llamo)\s+([a-záéíóúñ]+)/);
  if (nameMatch) {
    const name = nameMatch[1];
    if (FEMALE_NAMES.has(name)) return 'female';
    if (MALE_NAMES.has(name)) return 'male';
  }
  const words = lower.match(/\b[a-záéíóúñ]+\b/g) || [];
  for (const word of words) {
    if (FEMALE_NAMES.has(word)) return 'female';
    if (MALE_NAMES.has(word)) return 'male';
  }
  return 'male';
}

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;

    if (!accountId || !apiToken) {
      return NextResponse.json({ error: 'Cloudflare credentials not configured' }, { status: 500 });
    }

    const cleanText = stripMarkup(text);
    const gender = detectGender(cleanText);
    const speaker = gender === 'female' ? 'luna' : 'orion';

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/deepgram/aura-1`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: cleanText, speaker }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Cloudflare TTS error:', error);
      return NextResponse.json({ error: 'TTS generation failed' }, { status: 500 });
    }

    const audioBuffer = await response.arrayBuffer();

    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error: any) {
    console.error('TTS error:', error);
    return NextResponse.json({ error: error.message || 'TTS error' }, { status: 500 });
  }
}
