const express = require('express');
const router = express.Router();
const { Cliente } = require('../models');

// Criar um novo cliente
router.post('/', async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ler todos os clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
