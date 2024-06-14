const express = require('express');
const router = express.Router();
const { Veiculo } = require('../models');

// Criar um novo veículo
router.post('/', async (req, res) => {
    try {
        const veiculo = await Veiculo.create(req.body);
        res.status(201).json(veiculo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ler todos os veículos
router.get('/', async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll();
        res.status(200).json(veiculos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

