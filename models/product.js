module.exports = function(sequelize, DataTypes) {
  const Product = sequelize.define('product', {
    // The email cannot be null, and must be a proper email before creation
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT(9, 2),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_photo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    product_description: {
      type: DataTypes.STRING
    }
  });

  Product.associate = function(models) {
    Product.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Product;
};
