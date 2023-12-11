const User = require('../models/User');

class UserService {
    // get all users
    static async getAll() {
        return await User.findAll();
    }
}

module.exports = UserService;