const { somar, subtrair, multiplicar, dividir } = require('./math');


test('Testa subtrair', () => {
  const subtrair = jest.fn();
  subtrair();
  expect(subtrair).toHaveBeenCalled();
});

test('Testa multiplicar', () => {
  const multiplicar = jest.fn().mockReturnValue(10);
  multiplicar();
  expect(multiplicar).toHaveBeenCalled();
  expect(multiplicar()).toEqual(10);
});

test('Testa somar', () => {
  const somar = jest.fn().mockImplementation((a, b) => a + b);
  somar(1, 2);
  expect(somar).toHaveBeenCalled();
  expect(somar(1, 2)).toEqual(3);
});

test('Testa dividir', () => {
  const dividir = jest.fn()
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5)
  .mockReturnValue(15);

  expect(dividir()).toEqual(2);
  expect(dividir).toHaveBeenCalled();
  expect(dividir()).toEqual(5);
  expect(dividir).toHaveBeenCalledTimes(2);
  expect(dividir()).toEqual(15);
  expect(dividir).toHaveBeenCalledTimes(3);
});



test('Testa subtrair retorna mock original', () => {
  const subtrair = jest.fn().mockReturnValue(20);
    
  expect(subtrair()).toEqual(20);
  expect(subtrair).toHaveBeenCalled();
  subtrair.mockRestore();
  expect(subtrair()).toEqual(undefined);
})