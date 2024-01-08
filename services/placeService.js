const Place = require("../models/Place");

class PlaceService {
  // get all places
  static async getAll() {
    return await Place.findAll();
  }

  // getById
  static async getById(id) {
    return await Place.findByPk(id);
  }
}

module.exports = PlaceService;
