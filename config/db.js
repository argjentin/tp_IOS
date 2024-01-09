const { Sequelize } = require("sequelize");
// require dotenv
require("dotenv").config();

const IOS_POSTGRES_USER = process.env.IOS_POSTGRES_USER;
const IOS_POSTGRES_PASSWORD = process.env.IOS_POSTGRES_PASSWORD;
const IOS_POSTGRES_DB = process.env.IOS_POSTGRES_DB;
const IOS_POSTGRES_HOST = process.env.IOS_POSTGRES_HOST;

const sequelize = new Sequelize(
  IOS_POSTGRES_DB,
  IOS_POSTGRES_USER,
  IOS_POSTGRES_PASSWORD,
  {
    host: IOS_POSTGRES_HOST,
    dialect: "postgres",
  }
);

module.exports = sequelize;
