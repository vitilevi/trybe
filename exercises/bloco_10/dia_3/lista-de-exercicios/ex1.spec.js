const randomize = () => Math.round(Math.random() * 100);

test('Testa função randomize ', () => {
  const randomize = jest.fn().mockReturnValue(10);

  randomize();
  expect(randomize).toHaveBeenCalled();
  expect(randomize()).toEqual(10);
});