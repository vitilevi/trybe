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

