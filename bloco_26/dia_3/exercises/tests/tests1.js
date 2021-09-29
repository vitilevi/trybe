const { expect } = require("chai");
const func = require('../ex1-2-3');

describe('Testa a função', () => {
  describe('Testa para valores reais', () => {
    it('Retorna positivo para número maior que 0', () => {
      const actual = func(4);
      expect(actual).to.be.equals('positivo');
      expect(actual).to.be.a('string');
    });
    it('Retorna neutro para número igual a 0', () => {
      const actual = func(0);
      expect(actual).to.be.equals('neutro');
      expect(actual).to.be.a('string');
    });
    it('Retorna negativo para número menor que 0', () => {
      const actual = func(-12);
      expect(actual).to.be.equals('negativo');
      expect(actual).to.be.a('string');
    });
  });
  describe('Testa para valores errados', () => {
    it('Retorna o valor deve ser um número para uma string', () => {
      const actual = func('2');
      expect(actual).to.be.equals('o valor deve ser um número');
    })
  });
});