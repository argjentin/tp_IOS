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
    // Générez 10 lieux (places) aléatoires
    const places = [];
    for (let i = 0; i < 10; i++) {
      const placeData = generateRandomPlaceData();
      const place = await Place.create(placeData);
      places.push(place);
    }

    // Générez 10 entreprises (companies) aléatoires
    const companies = [];
    for (let i = 0; i < 10; i++) {
      const companyData = generateRandomCompanyData();
      const company = await Company.create(companyData);
      companies.push(company);
    }

    // Générez 100 utilisateurs avec une répartition aléatoire entre les lieux et les entreprises
    for (let i = 0; i < 100; i++) {
      const userData = generateRandomUserData();
      const user = await User.create(userData);

      // Associez chaque utilisateur à un lieu (place) aléatoire
      const randomPlace = places[Math.floor(Math.random() * places.length)];
      await user.setPlace(randomPlace);

      // Associez chaque utilisateur à une entreprise (company) aléatoire
      const randomCompany =
        companies[Math.floor(Math.random() * companies.length)];
      await user.setCompany(randomCompany);

      console.log("Utilisateur créé :", user.toJSON());
      console.log("Lieu associé :", randomPlace.toJSON());
      console.log("Entreprise associée :", randomCompany.toJSON());
    }
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
  }
};

// Appel de la fonction pour insérer des données aléatoires
// insertRandomUserData();

module.exports = insertRandomUserData;
