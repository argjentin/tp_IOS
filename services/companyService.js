const Company = require("../models/Company");

class CompanyService {
  // get all entreprises
  static async getAll() {
    return await Company.findAll();
  }

  // getById
  static async getById(id) {
    return await Company.findByPk(id);
  }
}

module.exports = CompanyService;
