module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'Cart',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      product_id: {
        type: DataTypes.STRING,
        defaultValue: 0,
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      tableName: 'categories',
      timestamps: false,
    }
  );

  // Cart.associate = (models) => {
  //   Cart.hasMany(models.Product, {
  //     foreignKey: 'product_id',
  //     as: 'product',
  //   });
  // };

  return Cart;
};
