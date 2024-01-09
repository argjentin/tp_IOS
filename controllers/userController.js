const UserService = require("../services/userService");

class UserController {
  // get all users
  static async getAll(req, res) {
    try {
      const users = await UserService.getAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // getById
  static async getById(req, res) {
    try {
      const user = await UserService.getById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // create
  static async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      res.status(201).json(user);
      console.log(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // update
  static async update(req, res) {
    try {
      const user = await UserService.update(req.params.id, req.body);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // toggle place
  static async togglePlace(req, res) {
    try {
      await UserService.togglePlace(req.params.id, req.params.placeId);
      res.status(200).json("OK");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
}

module.exports = UserController;
