const cepServices = require('../services/cepServices');

const getCep = async (req, res, next) => {
  const { cep } = req.params;
  const getMyCep = await cepServices.getCep(cep);
  if (!getMyCep || getMyCep.error) {
    return next(getMyCep)
  }
  return res.status(200).json(getMyCep);
};

const postCep = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const postCep = await cepServices.postCep(cep, logradouro, bairro, localidade, uf);
  if (postCep.error) {
    return next(postCep);
  }
  return res.status(201).json(postCep);
}

module.exports = {
  getCep,
  postCep,
}