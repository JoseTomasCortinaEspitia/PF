const { createUser } = require('../controllers/userController');

const createUserHandler = async (req, res) => {
    const { name, sex, email, password, cellphone, address } = req.body;
    try {
        const response = await createUser(name, sex, email, password, cellphone, address);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { createUserHandler }