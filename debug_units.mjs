import { ALL_C2_UNITS } from './src/lib/c2-units/index.js';
console.log('Total units:', ALL_C2_UNITS.length);
ALL_C2_UNITS.forEach((u, i) => {
  if (!u) {
    console.log(`Unit at index ${i} is undefined`);
  } else if (!u.id) {
    console.log(`Unit at index ${i} has no id:`, u);
  }
});
