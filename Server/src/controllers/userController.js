const { User } = require('../db');

const createUser = async (name, sex, email, password, cellphone, address) => {
    return await User.create({name, sex, email, password, cellphone, address});
}

module.exports = {
    createUser
}