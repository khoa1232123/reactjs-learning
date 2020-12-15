const express = require('express');
const {
  upload,
  requireSignin,
  adminMiddleware,
} = require('../../common-middleware');
const { createPage, getPage } = require('../../controller/admin/page');
const router = express.Router();

router.post(
  '/create',
  requireSignin,
  adminMiddleware,
  upload.fields([{ name: 'banners' }, { name: 'products' }]),
  createPage
);

router.get('/:category/:type', getPage);

module.exports = router;
