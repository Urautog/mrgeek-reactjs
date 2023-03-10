module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
      "Product",
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.FLOAT(5, 2),
          allowNull: false,
        },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        isActive: {
          type: DataTypes.BOOLEAN,
          defaultValue: 0,
          allowNull: false,
        },
      },
      {
        tableName: "products",
        timestamps: false,
      }
    );
  
    Product.associate = (models) => {
      Product.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "category",
      });
  
      Product.belongsToMany(models.Order, {
        as: "orders",
        through: "OrderItens",
        foreignKey: "product_id",
        otherKey: "order_id",
         timestamps: false,
      });
    };
  
    return Product;
  };