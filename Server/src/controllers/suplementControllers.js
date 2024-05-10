const { Suplement } = require('../db.js');

const createSuplement = async (name, category, description, price, image, amount) => {
    return await Suplement.create({ name, category, description, price, image, amount });
}

module.exports = { createSuplement }