const express = require("express");
const apiRouter = require("./routes/apiRouter");
const app = express();
require("dotenv").config();

const { sequelize, User, Place, Company } = require("./models");
const insertRandomUserData = require("./models/generate");

const IOS_API_PORT = process.env.IOS_API_PORT || 3001;

app.use("/api", apiRouter);

// Synchronisation des modèles avec la base de données en utilisant l'option "force: false"
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Modèles synchronisés avec la base de données !");

    // Une fois que la synchronisation est terminée, appelez la fonction pour insérer des données aléatoires
    insertRandomUserData();

    // Démarrer le serveur Express
    app.listen(IOS_API_PORT, () => {
      console.log(`Server is listening on port ${IOS_API_PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erreur lors de la synchronisation :", error);
  });
