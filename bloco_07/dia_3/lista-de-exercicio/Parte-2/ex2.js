const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = word => {
  const len = [];
  for (let index = 0; index < word.length; index += 1) {
    len.push(word[index].length);
  }
  return len;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);