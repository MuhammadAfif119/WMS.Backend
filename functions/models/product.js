'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.hasMany(models.stok, {
          foreignKey:'product_id',
          as:'stoka'
        })
        // define association here
      }
  }
  product.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
    timestamps: true,
    tableName:'products'

  });
  return product;
};