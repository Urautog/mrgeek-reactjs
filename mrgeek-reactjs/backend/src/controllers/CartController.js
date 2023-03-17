const { Cart } = require('../models');

const CartController = {
  index: async (req, res) => {
    const carts = await Cart.findAll({});
    res.json(carts);
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const cart = await Cart.findByPk(id);
    if (cart) {
      res.json(cart);
    } else {
      res.status(404).send({ message: 'Carrinho não encontrado!' });
    }
  },
  new: async (req, res) => {
    const { name } = req.body;
    await Cart.create({
      name,
    });
  },
  deleteProduct: async (req, res) => {},
  addItem: async (req, res) => {
    const { user_id, product_id } = req.body;
    await Cart.create(
      {
        user_id,
        product_id,
      },
      { where: { user_id: user_id } }
    );
  },
};
module.exports = CartController;
