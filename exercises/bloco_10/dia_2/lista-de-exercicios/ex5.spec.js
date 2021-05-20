beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('A saída deve ser "1-beforEach, 1-test, 1-afterEach"', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('A saída deve ser "1-beforeEach, 2-beforeEach, 2-test, 2-afterEach, 1-afterEach"', () => console.log('2 - test'));
});