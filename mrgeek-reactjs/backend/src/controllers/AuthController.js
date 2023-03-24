const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const AuthController = {
  showCadastro: (req, res) => {
    res.render('cadastro');
  },

  showLogin: (req, res) => {
    res.render('login');
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({ message: 'Usuário ou senha inválidos!' });
      }

      const data = {
        id: user.id,
        name: user.firstName,
        email: user.email,
        isAdmin: user.isAdmin,
      };

      const token = jwt.sign(data, process.env.JWT_KEY, { expiresIn: '1 day' });

      return res
        .status(200)
        .json({ user: data, token, message: 'Autenticado' });
    } catch (error) {
      if (error.name === 'SequelizeConnectionRefusedError') {
        return res.status(500).json({
          error: true,
          message: 'Sistema indisponível, tente novamente mais tarde!',
        });
      }

      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json(error.parent.sqlMessage);
      }

      if (error.name === 'SequelizeValidationError') {
        return res.status(400).json({
          error: true,
          message: `${error.errors[0].type} at ${error.errors[0].path}`,
        });
      }

      return res.status(400).json({
        error: true,
        message: 'Falha na requisição, tente novamente!',
      });
    }
  },
};

module.exports = AuthController;
