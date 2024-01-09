const express = require("express");
const apiRouter = require("./routes/apiRouter");
const app = express();
require("dotenv").config();

const IOS_API_PORT = process.env.IOS_API_PORT || 3001;

app.use("/api", apiRouter);

app.listen(IOS_API_PORT, () => {
  console.log("Server is listening on port 3001");
});
