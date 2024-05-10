const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('suplement', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        }, { timestamps: false }
    );
}