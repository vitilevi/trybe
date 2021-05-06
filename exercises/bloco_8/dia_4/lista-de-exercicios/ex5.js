
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.join('').split('').reduce((acc, ele) => (ele ==='a' || ele === 'A')? acc += 1 : acc, 0);
}

assert.deepStrictEqual(containsA(), 20);