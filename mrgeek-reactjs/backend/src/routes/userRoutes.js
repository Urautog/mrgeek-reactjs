const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const isLogin = require('../middlewares/isLogin');

const UserController = require('../controllers/UserController');

router.get('/users', UserController.index);

// router.get('/favoritos', UserController.showFavoritos);

router.get('/users/:id', UserController.getUser);

router.post('/register', UserController.new);

router.delete('/admin/delete/:id', UserController.destroy);

module.exports = router;
