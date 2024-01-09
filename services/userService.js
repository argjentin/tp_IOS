const User = require("../models/User");
const Place = require("../models/Place");

class UserService {
  // get all users
  static async getAll() {
    return await User.findAll();
  }

  // getById
  static async getById(id) {
    return await User.findByPk(id);
  }

  // create
  static async create(data) {
    return await User.create(data);
  }

  // update
  static async update(id, data) {
    return await User.update(data, {
      where: { id: id },
    });
  }

  // toggle place
  static async togglePlace(id, placeId) {
    const user = await User.findByPk(id);
    const place = await Place.findByPk(placeId);

    if (!user || !place) {
      throw new Error("User or place not found");
    }

    await user.setPlace(place);
  }
}

module.exports = UserService;
