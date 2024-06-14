const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuração do Sequelize
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', // Especifique o dialeto do banco de dados aqui
    // Pode adicionar outras opções de configuração, se necessário
  }
);

// Teste da conexão
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
