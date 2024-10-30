const { Compound_look } = require('../models');

const getAllCompounds = async (req, res) => {
    try {
        // Extract pagination parameters from query
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
        const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page if not provided
        const offset = (page - 1) * limit;

        // Fetch compounds with pagination
        const compounds = await Compound_look.findAndCountAll({
            attributes: ['id', 'name', 'description','imageSource'], // Specify fields you want
            limit: limit,
            offset: offset
        });

        // Send paginated results and metadata
        res.json({
            data: compounds.rows,
            totalItems: compounds.count,
            totalPages: Math.ceil(compounds.count / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const createCompound = async (req, res) => {
    try {
        const compound = await Compound_look.create(req.body);
        res.status(201).json(compound);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCompoundById = async (req, res) => {
    try {
        const { id } = req.params;
        const compound = await Compound_look.findByPk(id,{attributes: ['id', 'name', 'description', 'imageSource']});

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
        const { name, description, imageSource, imageAttribution, dateModified } = req.body;
        console.log(name, description, imageSource, imageAttribution, dateModified);
        const compound = await Compound_look.findByPk(id);

        if (!compound) {
            return res.status(404).json({ error: 'Compound not found' });
        }
        // console.log(compound);
        // Update only the fields provided in the request body
        compound.name = name ?? compound.name;
        compound.description = description ?? compound.description;
        compound.imageSource = imageSource ?? compound.imageSource;
        compound.imageAttribution = imageAttribution ?? compound.imageAttribution;
        compound.dateModified = dateModified ?? compound.dateModified;

        await compound.save();

        res.json(compound);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const deleteCompound = async (req, res) => {
    try {
        const { id } = req.params;
        const compound = await Compound_look.findByPk(id);

        if (!compound) {
            return res.status(404).json({ error: 'Compound not found' });
        }

        await compound.destroy();

        res.json({ message: 'Compound deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const bulkCreateCompounds = async (req, res) => {
    try {
        const compoundsData = req.body; // Expecting `req.body` to be an array of objects
        const compounds = await Compound_look.bulkCreate(compoundsData, {
            updateOnDuplicate: ["name", "title", "description", "imageSource", "imageAttribution"]
        });
        console.log(compounds);
        res.status(201).json(compounds);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCompounds,
    createCompound,
    getCompoundById,
    updateCompound,
    deleteCompound,
    bulkCreateCompounds
};

