const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  if (products) return res.status(200).json(products);
  return res.status(404).json({message: 'not found'})
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if (product) return res.status(200).json(product);
  return res.status(404).json({message: 'not found'})
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  const newProduct = await ProductModel.add(name, brand);

  if (newProduct) return res.status(201).json(newProduct);
  return res.status(404).json({message: 'not found'});
});

router.delete('/:id', async (req, res) => {
  await ProductModel.exclude(req.params.id);

  return res.status(200).json({message: 'Product deleted'});
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  const products = await ProductModel.update(req.params.id, name, brand);

  if (products) return res.status(200).json(products);
  return res.status(404).json({message: 'not found'})
});

module.exports = router;