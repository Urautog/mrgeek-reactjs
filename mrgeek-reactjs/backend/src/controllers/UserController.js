const { validationResult } = require('express-validator');
const { User, Address } = require('../models');
const { randomUUID } = require('crypto');
const bcrypt = require('bcryptjs');

const UserController = {
  showMeusPedidos: (req, res) => {
    res.render('meus-pedidos');
  },
  showFavoritos: (req, res) => {
    res.render('favoritos');
  },
  showMeusDados: (req, res) => {
    res.render('meus-dados');
  },
  createUser: async (req, res) => {
    if (req.body.firstName && req.body.password) {
      const {
        firstName,
        lastName,
        email,
        tel,
        password,
        zipcode,
        state,
        city,
        district,
        street,
        number,
        complement,
      } = req.body;
      const hash = bcrypt.hashSync(password, 10);
      const userUUID = randomUUID();
      await User.create({
        id: userUUID,
        firstName,
        lastName,
        email,
        tel,
        password: hash,
      });
      await Address.create({
        id: randomUUID(),
        zipcode,
        state,
        city,
        district,
        street,
        number,
        complement,
        user_id: userUUID,
      });
      res.json({message: 'Sucesso'});
    } else {
      res.send('Não adicionado');
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;
    User.destroy({
      where: { id: id },
    });
  },
};

module.exports = UserController;

// createUser: (req, res) => {
//   const resultValidations = validationResult(req);

//   if (resultValidations.errors.length > 0) {
//     console.log(req);
//     return res.render("cadastro", {
//       errors: resultValidations.mapped(),
//       oldData: req.body,
//     });
//   }
// },
