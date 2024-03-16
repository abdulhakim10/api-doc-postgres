'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class api_doc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  api_doc.init({
    uid: DataTypes.UUID,
    title: DataTypes.STRING,
    path: DataTypes.STRING,
    json_data: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'api_doc',
  });
  return api_doc;
};