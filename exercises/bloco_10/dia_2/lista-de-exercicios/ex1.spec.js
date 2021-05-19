const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('Testa se o callback retorna o experado', (done) => {
  uppercase('salve salve', (res) => {
    expect(res).toEqual('SALVE SALVE');
  })
})