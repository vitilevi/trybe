const randomize = () => Math.round(Math.random() * 100);

test('1 - Testa função randomize ', () => {
  const randomize = jest.fn().mockReturnValue(10);

  randomize();
  expect(randomize).toHaveBeenCalled();
  expect(randomize()).toEqual(10);
});

test('2 - Testa se a função randomize divide dois valores', () => {
  const randomize = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(randomize(10, 5)).toEqual(2);
  expect(randomize).toHaveBeenCalled();
  expect(randomize(10, 5)).not.toEqual(2);
});

test('3 - Testa uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro', () => {
  const randomize = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(randomize(1, 2, 3)).toEqual(6);
  randomize.mockReset().mockImplementation((a) => a * 2);
  expect(randomize(2)).toEqual(4);
});

test('4 - crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.', () => {

  let toUpCase = (str) => str.toUpperCase();
  let firstLetter = (str) => str.split('')[0];
  let concactStr = (str1, str2) => str1.concat(str2);

  expect(toUpCase('Teste testando')).toEqual('TESTE TESTANDO');
  expect(firstLetter('Teste testando')).toEqual('T');
  expect(concactStr('Teste', 'testando')).toEqual('Testetestando');
  

  toUpCase = jest.fn().mockImplementation((str) => str.toLowerCase());
  firstLetter = jest.fn().mockImplementation((str) => str.split('')[str.length - 1]);
  concactStr = jest.fn().mockImplementation((str1, str2, str3) => str1.concat(str2).concat(str3));

  expect(toUpCase('Teste testando')).toEqual('teste testando');
  expect(firstLetter('Teste testando')).toEqual('o');
  expect(concactStr('Teste', 'testando', '1')).toEqual('Testetestando1');
});
