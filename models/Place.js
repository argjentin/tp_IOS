const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Place = sequelize.define(
  "Place",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },

  {
    tableName: "places",
    timestamps: false,
  }
);

module.exports = Place;
