'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stok extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.product, {
        foreignKey:'product_id',
        as:'stoka'
      })
      // define association here
    }
  }
  stok.init({
    product_id: DataTypes.INTEGER,
    kuantitas: DataTypes.INTEGER,
    keterangan: DataTypes.STRING,
    customer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'stok',
    tableName: 'stoks',
    timestamps: true
  });
  return stok;
};