const sequelize = require('../config/db');

// Importation des modèles
const User = require('./User');
const Entreprise = require('./entreprise');

// Définition des relations
User.belongsTo(Entreprise);
Entreprise.hasMany(User);

// Synchronisation des modèles avec la base de données
sequelize.sync({ force: false })
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
  Entreprise
};