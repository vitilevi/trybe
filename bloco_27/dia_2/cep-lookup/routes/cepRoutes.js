const router = require('express').Router();
const cepController = require('../controllers/cepControllers');
const errors = require('../controllers/errors');

router.post('/', cepController.postCep);
router.get('/:cep', cepController.getCep);
router.use(errors);

module.exports = router;