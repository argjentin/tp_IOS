const sequelize = require("../config/db");

// Importation des modèles
const User = require("./User");
const Place = require("./Place");
const Company = require("./Company");
const insertRandomUserData = require("./generate");

// Définition des relations
User.belongsTo(Place);
User.belongsTo(Company);
Place.hasMany(User);
Company.hasMany(User);

// Synchronisation des modèles avec la base de données
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Modèles synchronisés avec la base de données !");
    insertRandomUserData();
  })
  .catch((error) => {
    console.error("Erreur lors de la synchronisation :", error);
  });

// Exportation des modèles et de l'instance sequelize
module.exports = {
  sequelize,
  User,
  Place,
  Company,
};
