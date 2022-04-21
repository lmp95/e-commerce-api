const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), validate(productValidation.createProduct), productController.createProduct)
  .get(auth('getUsers'), validate(productValidation.getProducts), productController.getProducts);

router
  .route('/:productId')
  .get(auth('getUsers'), validate(productValidation.getProduct), productController.getProduct)
  .post(auth('manageUsers'), validate(productValidation.updateProduct), productController.updateProduct)
  .delete(auth('manageUsers'), validate(productValidation.deleteProduct), productController.deleteProduct);

module.exports = router;
