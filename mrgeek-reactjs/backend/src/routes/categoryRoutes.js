const express = require('express');
const CategoryController = require('../controllers/CategoryController');

const router = express.Router();

router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.getOne);
router.post('/categories', CategoryController.new);

module.exports = router;
