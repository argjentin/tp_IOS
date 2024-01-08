const sequelize = require("../config/db");

// Importation des modèles
const User = require("./User");
const Place = require("./Place");
const Company = require("./Company");

// Définition des relations
User.belongsTo(Place);
Place.hasMany(User);
Company.hasMany(User);

// Synchronisation des modèles avec la base de données
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Modèles synchronisés avec la base de données !");
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
