const { it, expect } = require('@jest/globals');
const searchEmployee = require('./bonus');

describe('Testa de existência', () => {
  it('Testa se a função existe', () => {
    expect(typeof(searchEmployee)).toEqual('function');
  });

  it('Testa se a função retorna uma string', () => {
    expect(typeof(searchEmployee('8579-6'))).toEqual('string');
  })
});

describe('Testa valores passados para a função', () => {
  it('Testa se passado um valor de id e informação é retornado corretamente', () => {
    expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana');
  });

  it('Testa se passado um id que não existe ele retorna "ID não identificada"', () => {
    expect(searchEmployee('1', 'firstName')).toEqual('ID não identificada');
  });

  it('Testa se passado uma informação que não existe ele retorna "ID não identificada"', () => {
    expect(searchEmployee('9852-2-2', 'phone')).toEqual('Informação indisponível');
  });
})