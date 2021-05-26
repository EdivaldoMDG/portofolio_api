require("dotenv").config();
const express = require("express");
const database = require("../config/database");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 3333;

database();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;