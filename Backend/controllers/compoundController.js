const { Compound } = require('../models');

const getAllCompounds = async (req, res) => {
    try {
        const compounds = await Compound.findAll();
        res.json(compounds);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createCompound = async (req, res) => {
    try {
        const compound = await Compound.create(req.body);
        res.status(201).json(compound);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCompoundById = async (req, res) => {
    try {
        const { id } = req.params;
        const compound = await Compound.findByPk(id);

        if (!compound) {
            return res.status(404).json({ error: 'Compound not found' });
        }

        res.json(compound);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const updateCompound = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, description } = req.body;

        const compound = await Compound.findByPk(id);

        if (!compound) {
            return res.status(404).json({ error: 'Compound not found' });
        }

        compound.name = name ?? compound.name;
        compound.age = age ?? compound.age;
        compound.description = description ?? compound.description;

        await compound.save();

        res.json(compound);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteCompound = async (req, res) => {
    try {
        const { id } = req.params;
        const compound = await Compound.findByPk(id);

        if (!compound) {
            return res.status(404).json({ error: 'Compound not found' });
        }

        await compound.destroy();

        res.json({ message: 'Compound deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCompounds,
    createCompound,
    getCompoundById,
    updateCompound,
    deleteCompound
};

