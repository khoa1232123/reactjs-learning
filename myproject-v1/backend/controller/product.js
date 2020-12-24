const Product = require('../models/product');
const shortid = require('shortid');
const slugify = require('slugify');
const Category = require('../models/category');
const { populate } = require('../models/product');

exports.createProduct = (req, res) => {
  // res.status(200).json({ file: req.files, body: req.body });
  const {
    name,
    price,
    priceSale,
    quantity,
    description,
    productPictures,
    category,
  } = req.body;

  // let productPictures = [];

  // if (req.files.length > 0) {
  //   productPictures = req.files.map((file) => {
  //     return { img: file.filename };
  //   });
  // }

  const product = new Product({
    name,
    slug: slugify(name),
    price,
    priceSale,
    quantity,
    description,
    productPictures,
    category,
    createdBy: req.user._id,
  });
  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product });
    }
  });
};

exports.getAllProduct = (req, res) => {
  Product.find({})
    .populate({ path: 'category', select: '_id name' })
    .populate({
      path: 'createdBy',
      populate: { path: 'user' },
      select: '_id firstName',
    })
    .select('_id name price priceSale category createdBy')
    .exec((error, products) => {
      if (error) return res.status(400).json({ error });
      if (products) {
        res.status(200).json({ products });
      }
    });
};

exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;
  if (productId) {
    Product.findOne({ _id: productId }).exec((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(200).json({ product });
      }
    });
  } else {
    return res.status(400).json({ error: 'params required' });
  }
};
