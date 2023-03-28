const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

const OrderController = require('../controllers/OrderController');

router.get('/orders', OrderController.index);

router.get('/profile/orders', verifyToken, OrderController.getOne);

router.post('/orders', verifyToken, OrderController.new);

module.exports = router;
