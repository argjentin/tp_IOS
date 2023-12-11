const UserService = require('../services/userService');

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
}

module.exports = UserController;