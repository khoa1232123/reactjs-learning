const Product = require('../models/product');
const shortid = require('shortid');
const slugify = require('slugify');
const Category = require('../models/category');
const { populate } = require('../models/product');

exports.createProduct = (req, res) => {
  // res.status(200).json({ file: req.files, body: req.body });
  console.log(req.body);
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

exports.getAllProduct = async (req, res) => {
  const { skip, limit } = req.query;
  const skipQ = skip ? Number(skip) : 0;
  const limitQ = limit ? Number(limit) : 12;

  const countAllProduct = await Product.find({}).countDocuments({});
  console.log(countAllProduct);

  Product.find({})
    .populate({ path: 'category', select: '_id name' })
    .populate({
      path: 'createdBy',
      populate: { path: 'user' },
      select: '_id firstName',
    })
    .select('_id name price priceSale category createdBy productPictures')
    .skip(skipQ)
    .limit(limitQ)
    .exec((error, products) => {
      if (error) return res.status(400).json({ error });
      if (products) {
        res.status(200).json({ products, countAllProduct });
      }
    });
};

exports.getProductByCat = (req, res) => {
  const { catId } = req.params;
  console.log(catId);
  Product.find({ category: catId })
    .populate({ path: 'category', select: '_id name' })
    .populate({
      path: 'createdBy',
      populate: { path: 'user' },
      select: '_id firstName',
    })
    .select('_id name price priceSale category createdBy productPictures')
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
    Product.findOne({ _id: productId })
      .populate({ path: 'category', select: '_id name' })
      .exec((error, product) => {
        if (error) return res.status(400).json({ error });
        if (product) {
          res.status(200).json({ product });
        }
      });
  } else {
    return res.status(400).json({ error: 'params required' });
  }
};

exports.updateProduct = async (req, res) => {
  console.log(req.body);
  const {
    _id,
    name,
    price,
    priceSale,
    quantity,
    description,
    productPictures,
    category,
  } = req.body;
  const product = {
    name,
    slug: slugify(name),
    price,
    priceSale,
    quantity,
    description,
    productPictures,
    category,
    createdBy: req.user._id,
  };
  const updatedProduct = await Product.findOneAndUpdate({ _id: _id }, product, {
    new: true,
  });
  res.status(201).json({ updatedProduct });
};

exports.deleteProduct = async (req, res) => {
  console.log(req.body);
  const delProduct = await Category.findOneAndDelete({ _id: req.body.id });
  if (delProduct) {
    res.status(201).json({ message: 'Categories removed' });
  } else {
    res.status(400).json({ message: 'Something went wrong' });
  }
};
