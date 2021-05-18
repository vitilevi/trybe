const { it, expect } = require('@jest/globals');
const { obj1, obj2, obj3 } = require('./ex5');

describe('Testa os objetos', () => {
  it('Compare dois objetos (JSON) para verificar se são idênticos ou não', () => {
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
  })
})