const { Veiculo } = require('../models');

exports.createVeiculo = async (req, res) => {
    try {
        const veiculo = await Veiculo.create(req.body);
        res.status(201).json(veiculo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getVeiculos = async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll();
        res.status(200).json(veiculos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getVeiculoById = async (req, res) => {
    try {
        const veiculo = await Veiculo.findByPk(req.params.id);
        if (veiculo) {
            res.status(200).json(veiculo);
        } else {
            res.status(404).json({ error: 'Veiculo não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateVeiculo = async (req, res) => {
    try {
        const [updated] = await Veiculo.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedVeiculo = await Veiculo.findByPk(req.params.id);
            res.status(200).json(updatedVeiculo);
        } else {
            res.status(404).json({ error: 'Veiculo não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteVeiculo = async (req, res) => {
    try {
        const deleted = await Veiculo.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Veiculo não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
