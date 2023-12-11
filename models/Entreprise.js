const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Entreprise = sequelize.define('Entreprise', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description : {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    address : {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    city : {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'entreprises',
    timestamps: false
});

module.exports = Entreprise;
