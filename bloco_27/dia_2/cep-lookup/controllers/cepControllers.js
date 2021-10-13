const cepServices = require('../services/cepServices');
const Joi = require('joi');

const getCep = async (req, res, next) => {
  const { cep } = req.params;
  const getMyCep = await cepServices.getCep(cep);
  if (!getMyCep || getMyCep.error) {
    return next(getMyCep.error)
  }
  return res.status(200).json(getMyCep);
};

const postCep = async (req, res, next) => {
  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required().length(2),
  }).validate(req.body);

  if (error) return next(error);

  const postCep = await cepServices.postCep(req.body);
  if (postCep.error) {
    return next(postCep.error);
  }
  return res.status(201).json(postCep);
}

module.exports = {
  getCep,
  postCep,
}