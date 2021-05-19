const { test } = require("@jest/globals");

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('Testa se o callback retorna o experado', () => {
  uppercase('salve salve', (res) => {
    expect(res).toEqual('SALVE SALVE');
  });
});