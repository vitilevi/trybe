const writeFile = require('../ex4-5');
const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testa a função writeFile', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  describe('A resposta', () => {
    it('Retorna uma string quando sucesso', () => {
      const actual = writeFile('meuArquivo.txt', 'Ola mundo!')
      expect(actual).to.be.a('string');
    });
  
    it('Retorna ok', () => {
      const actual = writeFile('meuArquivo.txt', 'Ola mundo');
      expect(actual).to.be.equals('ok');
    })
  })
})