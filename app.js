const express = require('express');
const app = express();
const sequelize = require('./sequelize'); // Importa a instância do Sequelize
const clienteRoutes = require('./routes/clienteRoutes');
const veiculoRoutes = require('./routes/veiculoRoutes');

app.use(express.json());

app.use('/clientes', clienteRoutes);
app.use('/veiculos', veiculoRoutes);

const PORT = process.env.PORT || 3000;

// Inicializa o servidor após autenticar a conexão com o banco de dados
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
