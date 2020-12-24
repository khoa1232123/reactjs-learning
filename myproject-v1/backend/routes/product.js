const express = require('express');
const router = express.Router();
const Product = require('../models/product.js');
const { data } = require('../data.js');
const {
  getAllProduct,
  createProduct,
  getProductDetailsById,
} = require('../controller/product.js');
const {
  adminMiddleware,
  requireSignin,
} = require('../common-middleware/index.js');

router.get('/getproducts', getAllProduct);
router.post('/create', requireSignin, adminMiddleware, createProduct);
router.get('/getproduct/:productId', getProductDetailsById);

module.exports = router;
