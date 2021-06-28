const { describe, it, expect } = require('@jest/globals');
const getUserName = require('./ex2-e-3 ');

describe('Testa a função getUserName', () => {
  it('Testa o resultado da função getUserName para o caso em que o usuário é encontrado', async () => {
      const resp = await getUserName(4);
      expect(resp).toEqual('Mark');
  });

  it('Testa o resultado da função getUserName para o caso em que o usuário não é encontrado', async () => {
    try{
      await getUserName(6);
    } catch (error){
        expect(error).toEqual({ error: 'User with ' + 6 + ' not found.' });
    };
  });
});