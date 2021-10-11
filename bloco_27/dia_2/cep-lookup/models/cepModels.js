const connection = require('./connection');

const getCep = async (cep) => {
  const [getCep] = await connection.execute(
    'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?;', [cep]
  );
  return getCep || null;
}

const postCep = async (cep, logradouro, bairro, localidade, uf) => {
  const [postCep] = await connection.execute(
    'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?;', [cep]
  );
  return postCep || null;
}

module.exports = {
  getCep,
  postCep,
}