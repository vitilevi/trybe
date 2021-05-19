const { it, expect } = require('@jest/globals');
const myFizzBuzz = require('./ex4');

describe('Testa a função FizzBuzz', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });

  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });

  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  });

  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('2')).toEqual(false);
  });
});
