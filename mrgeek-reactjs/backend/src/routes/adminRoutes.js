const express = require('express');
const AdminController = require('../controllers/AdminController');
const ProductController = require('../controllers/ProductController');
const UserController = require('../controllers/UserController');
const imageUpload = require('../middlewares/imageUpload');

const router = express.Router();

router.get('/create-product', AdminController.showCreateProduct);
router.get('/products', AdminController.showAllProducts);
router.get('/users', AdminController.showAllUsers);
router.get('/edit-product/:id', AdminController.showEditProduct);
router.post(
  '/create-product',
  imageUpload.single('image'),
  ProductController.createProduct
);
router.post('/delete-user/:id', UserController.deleteUser);
router.post('/delete-product/:id', ProductController.deleteProduct);

module.exports = router;
