const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const personRoutes = require("../routes/personRoutes");

app.use("/person", personRoutes);

app.get("/", (req, res) => {
  res.json({ message: "retorna Express!" });
});

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${user}:${password}@apicluster.rojhzo3.mongodb.net/bdapirest?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
