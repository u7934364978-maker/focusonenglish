const text = 'The young girl with soft, youthful features has got an round face';
const dict = {
  'the': 'el/la', 'young': 'joven', 'girl': 'niña', 'with': 'con',
  'soft': 'suave', 'youthful': 'juvenil', 'has got': 'tiene', 'an': 'un',
  'round': 'redonda', 'face': 'cara',
};

const keys = Object.keys(dict).sort((a,b) => b.length - a.length);
let result = text;

for (const key of keys) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\-]/g, '\\$&');
  const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
  const matches = text.match(regex);
  console.log(`Key: "${key}" -> Matches:`, matches);
  result = result.replace(regex, m => `[[${m}|${dict[key.toLowerCase()]}]]`);
}

console.log('Result:', result);
