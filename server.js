const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const brews = require("./routes/brews");

const app = express();

app.use(express.json());

app.use("/api/v1/brews", brews);

const PORT = process.env.PORT;

if (process.env.NODE_ENV === "production")
  app.use(express.static("client/build"));

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
