const cepModels = require('../models/cepModels');
const Joi = require('joi');

const isCepValid = (cep) => /[0-9]{5}-?[0-9]{3}/.test(cep);

const getCep = async (cep) => {
  if (!isCepValid(cep)) {
    return { error: {code: 'invalidData', message: 'CEP inválido'}};
  }
  const getCep = await cepModels.getCep(cep);
  if (!getCep) {
    return { error: {code: 'notFound', message: 'CEP não encontrado'}};
  }
  return getCep;
};

const postCep = async (cep, logradouro, bairro, localidade, uf) => {
  const inserted = cepModels.postCep(cep, logradouro, bairro, localidade, uf);
  if (!inserted) {
    return { error: { code: 'alreadyExists', message: 'CEP já existente' } };
  }
  return inserted;
}

module.exports = {
  getCep,
  postCep,
}