const { User, Address, Cart } = require('../models');
const { randomUUID } = require('crypto');
const bcrypt = require('bcryptjs');

const UserController = {
  index: async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    User.destroy({ where: { id: id } });
  },
  getUser: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    const userAddresses = await Address.findAll({ where: { user_id: id } });
    res.json({ user, userAddresses });
  },
  new: async (req, res) => {
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
      console.log(userUUID);
      await User.create({
        id: userUUID,
        firstName,
        lastName,
        email,
        tel,
        password: hash,
      });
      console.log(userUUID);

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
      // await Cart.create({
      //   id: randomUUID(),
      //   user_id: userUUID,
      //   product_id,
      // });
      res.json({ message: 'Sucesso' });
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
  getAddresses: async (req, res) => {
    const { id } = req.params;
    const userAddresses = await User.findAll({
      where: {
        user_id: id,
      },
    });
    res.json(userAddresses);
  },
};

module.exports = UserController;
