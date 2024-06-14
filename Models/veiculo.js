'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {
    static associate(models) {
      // Defina as associações aqui, se necessário
      // Exemplo: Veiculo.hasMany(models.Reserva);
    }
  }
  Veiculo.init({
    modelo: DataTypes.STRING,
    marca: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    placa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Veiculo',
  });
  return Veiculo;
};
