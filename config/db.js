const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tpios', 'postgres', '2503', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
