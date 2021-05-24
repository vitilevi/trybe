let func = require('./ex5');

test('5 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.', () => {
  const first = jest
  .spyOn(func, 'toUpCase')
  .mockImplementation((str) => str.toLowerCase());

  expect(first('SALVE SALVE')).toEqual('salve salve');
  func.toUpCase.mockRestore();
  expect(func.toUpCase('Teste salve')).toEqual('TESTE SALVE');
});