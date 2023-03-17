const { Category } = require('../models');

const CategoryController = {
  index: async (req, res) => {
    const categories = await Category.findAll({});
    res.json(categories);
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).send({ message: 'Categoria não encontrado!' });
    }
  },
  new: async (req, res) => {
    const { name } = req.body;
    await Category.create({
      name,
    });
  },
  deleteProduct: async (req, res) => {},
};
module.exports = CategoryController;
