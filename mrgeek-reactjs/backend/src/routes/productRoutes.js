const express = require('express');
const ProductController = require('../controllers/ProductController');
const imageUpload = require('../middlewares/imageUpload');

const router = express.Router();

router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.getOne);
router.post(
  '/products/new',
  imageUpload.single('image'),
  ProductController.new
);
router.put(
  '/products/update/:id',
  imageUpload.single('image'),
  ProductController.update
);

module.exports = router;
