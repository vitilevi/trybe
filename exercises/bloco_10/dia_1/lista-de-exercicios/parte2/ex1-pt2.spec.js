const { it, expect } = require("@jest/globals");


const encode = (str) => {
  const obj = {a:1, e:2, i:3, o:4, u:5};
  return str.replace(/[aeiou]/g, l => obj[l]);
};

const decode = (str) => {
  const obj = {1:'a', 2:'e', 3:'i', 4:'o', 5:'u'};
  return str.replace(/[1-5]/g, l => obj[l]);
};

describe('Testa as funções decode e encode', () => {
  it('Testa se encode e decode são funções', () => {
    expect(typeof(encode)).toEqual('function');
    expect(typeof(decode)).toEqual('function');
  });
  
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('aeiou')).toEqual('12345');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  it('Testa se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz67890')).toEqual('bcdfghjklmnpqrstvwxyz67890');
  });

  it('Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('hi there').length).toEqual(8);
  });
})