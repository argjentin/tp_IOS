const faker = require("faker");
const sequelize = require("../config/db");
const User = require("../models/User");
const Place = require("../models/Place");
const Company = require("../models/Company");

const generateRandomUserData = () => {
  return {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
  };
};

const generateRandomPlaceData = () => {
  return {
    name: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    longitude: faker.address.longitude(),
    latitude: faker.address.latitude(),
  };
};

const generateRandomCompanyData = () => {
  return {
    name: faker.company.companyName(),
    description: faker.company.catchPhrase(),
  };
};

const insertRandomUserData = async () => {
  try {
    for (let i = 0; i < 50; i++) {
      const userData = generateRandomUserData();
      const user = await User.create(userData);

      const placeData = generateRandomPlaceData();
      const place = await Place.create(placeData);

      const companyData = generateRandomCompanyData();
      const company = await Company.create(companyData);

      console.log("Utilisateur créé :", user.toJSON());
      console.log("Place créée :", place.toJSON());
      console.log("Company créée :", company.toJSON());
    }
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
  }
};

// Appel de la fonction pour insérer des données aléatoires
// insertRandomUserData();

module.exports = insertRandomUserData;
