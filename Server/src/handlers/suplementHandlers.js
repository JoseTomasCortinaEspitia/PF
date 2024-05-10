const { createSuplement } = require('../controllers/suplementControllers');

//por query
const getSuplementsHandler = (req, res) => {
    const { name } = req.query;
    if (name) {
        res.status(200).json({ message: `Get Suplements ${name}` });
    }
    res.status(200).json({ message: "Get Suplements" });
}

//por params
const getSuplementByIdHandler = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Get Suplement ${id}` });
}

//por body
const createSuplementHandler = async (req, res) => {
    const { name, category, description, price, image, amount } = req.body;
    try {
        const response = await createSuplement(name, category, description, price, image, amount);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { getSuplementsHandler, getSuplementByIdHandler, createSuplementHandler }