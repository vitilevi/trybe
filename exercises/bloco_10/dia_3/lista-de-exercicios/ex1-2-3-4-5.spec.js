const randomize = () => Math.round(Math.random() * 100);

test('Testa função randomize ', () => {
  const randomize = jest.fn().mockReturnValue(10);

  randomize();
  expect(randomize).toHaveBeenCalled();
  expect(randomize()).toEqual(10);
});

test('Testa se a função randomize divide dois valores', () => {
  const randomize = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(randomize(10, 5)).toEqual(2);
  expect(randomize).toHaveBeenCalled();
  expect(randomize(10, 5)).not.toEqual(2);
});

