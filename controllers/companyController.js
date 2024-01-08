const CompanyService = require("../services/companyService");

class CompanyController {
  // get all entreprises
  static async getAll(req, res) {
    try {
      const entreprises = await CompanyService.getAll();
      res.status(200).json(entreprises);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // getById
  static async getById(req, res) {
    try {
      const entreprise = await CompanyService.getById(req.params.id);
      res.status(200).json(entreprise);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = CompanyController;
