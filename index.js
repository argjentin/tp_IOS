const express = require("express");
const apiRouter = require("./routes/apiRouter");
const app = express();
require("dotenv").config();

const { sequelize, User, Place, Company } = require("./models");

const IOS_API_PORT = process.env.IOS_API_PORT || 3001;

app.use(express.json());

app.use("/api", apiRouter);

app.listen(IOS_API_PORT, () => {
  console.log(`API lancée sur le port ${IOS_API_PORT}`);
});
