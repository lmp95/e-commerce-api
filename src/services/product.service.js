const { Product } = require('../models');

const createProduct = async (productBody) => {
  return Product.create(productBody);
};

const queryProducts = async (options) => {
  const products = await Product.find();
  return products;
};

const getProductById = async (id) => {
  return Product.findById(id);
};

const updateProductById = async (productId, updateProduct) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  Object.assign(product, updateProduct);
  await product.save();
  return product;
};

const deleteProductById = async (productId) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  await product.remove();
  return product;
};

module.exports = {
  createProduct,
  queryProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
