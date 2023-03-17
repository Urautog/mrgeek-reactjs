const { Product } = require('../models');
const { randomUUID } = require('crypto');

const ProductsController = {
  index: async (req, res) => {
    const products = await Product.findAll({
      include: [
        { association: 'category', required: false },
        { association: 'orders' },
      ],
    });
    res.json(products);
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
      include: [{ association: 'category', required: false }],
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).send({ message: 'Produto não encontrado!' });
    }
  },

  new: async (req, res) => {
    const { name, description, price, category, stock, isActive } = req.body;
    await Product.create({
      id: randomUUID(),
      name,
      image: req.file.filename,
      description,
      price,
      category_id: category,
      stock,
      isActive: isActive == 'on' ? true : false,
    });
    res.json({ message: 'Produto criado com sucesso' });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, description, image, price, category, stock, isActive } =
      req.body;
    Product.update(
      {
        name,
        image,
        description,
        price,
        category_id: category,
        stock,
        isActive: isActive == 'on' ? true : false,
      },
      { where: { id: id } }
    );
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    Product.destroy({
      where: { id: id },
    });
    res.redirect('/admin/products');
  },
};
module.exports = ProductsController;
