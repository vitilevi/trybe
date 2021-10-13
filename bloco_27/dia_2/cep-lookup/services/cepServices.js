const cepModels = require('../models/cepModels');

const isCepValid = (cep) => /^\d{5}-?\d{3}$/.test(cep);

const postCep = async (infosObj) => {
  const inserted = cepModels.postCep(infosObj);
  if (!inserted) {
    return { error: { code: 'alreadyExists', message: 'CEP já existente' } };
  }
  return inserted;
}

const getCep = async (cep) => {
  if (!isCepValid(cep)) {
    return { error: {code: 'invalidData', message: 'CEP inválido'}};
  }

  const formatedCep = cep.includes('-')? cep.replace('-', '') : cep;
  const getCep = await cepModels.getCep(formatedCep);
  if (getCep.length !== 0) return getCep;
  
  const apiCep = await cepModels.getCepFromApi(formatedCep);
  if (apiCep.erro) {
    return { error: {code: 'notFound', message: 'CEP não encontrado'}};
  }
  return await postCep(apiCep);
};

module.exports = {
  getCep,
  postCep,
}