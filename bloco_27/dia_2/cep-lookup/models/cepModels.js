const connection = require('./connection');
const fetch = require('node-fetch');

const getCep = async (cep) => {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?;';
  const [getCep] = await connection.execute(query, [cep]);
  return getCep || null;
}

const postCep = async (infosObj) => {
  const { cep, logradouro, bairro, localidade, uf } = infosObj;
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?);';
  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
}

const getCepFromApi = async (cep) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  if (!response.ok) return null;
  if (response.erro) return null;
  const address = await response.json();
  return address;
}

module.exports = {
  getCep,
  postCep,
  getCepFromApi,
}