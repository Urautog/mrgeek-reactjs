const { Product } = require('../models');
const { randomUUID } = require('crypto');

const ProductsController = {
  index: async (req, res) => {
    const products = await Product.findAll({
      include: [{ association: 'category' }, { association: 'orders' }],
    });
    res.json(products);
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send({ message: 'Produto não encontrado!' });
    }
  },
  // showAll: async (req, res) => {
  //   const products = await Product.findAll();
  //   res.render('products', { products });
  // },
  createProduct: async (req, res) => {
    if (req.body.length != 'undefined') {
      const { name, description, price, category, stock, isActive } = req.body;
      const { filename } = req.file;
      await Product.create({
        id: randomUUID(),
        name,
        image: filename,
        description,
        price,
        category_id: category,
        stock,
        isActive: isActive == 'on' ? true : false,
      });
      res.redirect('/admin/products');
    } else {
      res.send('Produto não criado!');
    }
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
