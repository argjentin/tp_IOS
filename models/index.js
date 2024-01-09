const sequelize = require("../config/db");

// Importation des modèles
const User = require("./User");
const Place = require("./Place");
const Company = require("./Company");

// Définition des relations
User.belongsTo(Place);
Place.hasMany(User);
Company.hasMany(User);

// Exportation des modèles et de l'instance sequelize
module.exports = {
  sequelize,
  User,
  Place,
  Company,
};
