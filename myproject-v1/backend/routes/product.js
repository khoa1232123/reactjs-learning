const express = require('express');
const router = express.Router();
const Product = require('../models/product.js');
const { data } = require('../data.js');

router.get;

router.get('/getproducts', (req, res) => {
  const products = data.products;
  // const products = Product.find({});
  res.send(products);
});

module.exports = router;
