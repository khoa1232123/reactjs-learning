const express = require('express');
const router = express.Router();
const Product = require('../models/product.js');
const { data } = require('../data.js');
const {
  getAllProduct,
  createProduct,
  getProductDetailsById,
  updateProduct,
  getProductByCat,
} = require('../controller/product.js');
const {
  adminMiddleware,
  requireSignin,
} = require('../common-middleware/index.js');

router.get('/getproducts', getAllProduct);
router.get('/getproductbycat/:catId', getProductByCat);

router.post('/create', requireSignin, adminMiddleware, createProduct);
router.post('/update', requireSignin, adminMiddleware, updateProduct);
router.get('/getproduct/:productId', getProductDetailsById);

module.exports = router;
