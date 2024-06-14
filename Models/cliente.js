'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      // Defina as associações aqui, se necessário
      // Exemplo: Cliente.hasMany(models.Reserva);
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};
