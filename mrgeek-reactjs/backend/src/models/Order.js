module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.STRING,
      },
      product_id: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'orders',
      timestamps: false,
    }
  );

  // Order.associate = (models) => {
  //   Order.belongsToMany(models.Product, {
  //     as: 'products',
  //     foreignKey: 'order_id',
  //     otherKey: 'product_id',
  //     through: 'OrderItens',
  //   });

  //   Order.belongsTo(models.User, {
  //     foreignKey: "user_id",
  //     as: "user",
  //   });
  // };

  return Order;
};
