const faker = require("faker");
const sequelize = require("../config/db");
const User = require("../models/User");
const Place = require("../models/Place");
const Company = require("../models/Company");

const predefinedCoordinates = [
  { longitude: 6.861743, latitude: 47.639821 },
  { longitude: 6.862951, latitude: 47.639319 },
  { longitude: 6.864146, latitude: 47.638491 },
  { longitude: 6.864657, latitude: 47.639099 },
  { longitude: 6.862027, latitude: 47.638157 },
  { longitude: 6.862809, latitude: 47.638582 },
  { longitude: 6.86557, latitude: 47.638809 },
  { longitude: 6.862749, latitude: 47.63836 },
  { longitude: 6.864169, latitude: 47.638333 },
  { longitude: 6.862601, latitude: 47.638442 },
];

const generateRandomUserData = () => {
  return {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
  };
};

const generateRandomPlaceData = () => {
  // const randomIndex = Math.floor(Math.random() * predefinedCoordinates.length);
  // const selectedCoordinates = predefinedCoordinates[randomIndex];
  // I want to create all latitudes and longitudes for 10 places
  const selectedCoordinates = predefinedCoordinates.shift();
  predefinedCoordinates.push(selectedCoordinates);

  return {
    name: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    longitude: selectedCoordinates.longitude,
    latitude: selectedCoordinates.latitude,
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
