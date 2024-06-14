const { Cliente } = require('../models');

exports.createCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (cliente) {
            res.status(200).json(cliente);
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateCliente = async (req, res) => {
    try {
        const [updated] = await Cliente.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedCliente = await Cliente.findByPk(req.params.id);
            res.status(200).json(updatedCliente);
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCliente = async (req, res) => {
    try {
        const deleted = await Cliente.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
