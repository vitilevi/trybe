const { toUpCase, firstLetter, concactStr } = require('./ex4');
jest.mock('./ex4');

test('4 - crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.', () => {
  toUpCase.mockImplementation((str) => str.toLowerCase());
  firstLetter.mockImplementation((str) => str.split('')[str.length - 1]);
  concactStr.mockImplementation((str1, str2, str3) => str1.concat(str2).concat(str3));

  expect(toUpCase('Teste testando')).toEqual('teste testando');
  expect(firstLetter('Teste testando')).toEqual('o');
  expect(concactStr('Teste', 'testando', '1')).toEqual('Testetestando1');
  toUpCase.mockRestore();
});