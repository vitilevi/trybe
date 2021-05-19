const { describe, it, expect } = require('@jest/globals');
const getUserName = require('./ex2 e 3 ');

describe('Testa a função getUserName', () => {
  it('Testa o resultado da função getUserName para o caso em que o usuário é encontrado', () => {
    expect.assertions(1);
    return getUserName(4).then((resp) => {
      expect(resp).toEqual('Mark');
    });
  });

  it('Testa o resultado da função getUserName para o caso em que o usuário não é encontrado', () => {
    expect.assertions(1);
    return getUserName(6).catch((error) => {
      expect(error).toEqual({ error: 'User with ' + 6 + ' not found.' });
    });
  });
});