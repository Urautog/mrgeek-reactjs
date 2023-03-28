const { Order } = require('../models');
const { randomUUID } = require('crypto');
const { QueryTypes } = require('sequelize');
const db = require('../models/index')

const OrderController = {
  index: async (req, res) => {
    const orders = await Order.findAll({});
    res.json(orders);
  },

  getOne: async (req, res) => {
    const { id } = req.user;
    const orders = await db.sequelize.query(
      'SELECT DISTINCT (order_id), status FROM `orders` WHERE user_id = :id ',
      { replacements: { id: id }, type: QueryTypes.SELECT }
    );
    if (orders) {
      res.json(orders);
    } else {
      res.status(404).send({ message: 'Número de pedido não encontrado!' });
    }
  },

  new: async (req, res) => {
    const user_id = req.user.id;
    const order_id = randomUUID();

    const data = req.body.order.map((product) => {
      const { product_id } = product;
      return { id: randomUUID(), order_id, product_id, user_id };
    });
    await Order.bulkCreate(data);
    res.status(200).json({ order_id, message: 'Pedido realizado!' });
  },

  deleteOrder: async (req, res) => {},
};
module.exports = OrderController;
