
const {getSuplements, getSuplementByName, getSuplementById, createSuplement } = require('../controllers/suplementControllers');

//por query
const getSuplementsHandler = async (req, res) => {
    const { name } = req.query;
    try {    
        if (name) {
            const response = await getSuplementByName(name);
            res.status(200).json(response);
        } else{
            const response = await getSuplements();
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//por params
const getSuplementByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getSuplementById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
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