const express = require("express");
const app = express();

const mongoose = require("mongoose");

const { config } = require("dotenv");
config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const router = require("./routes/todoRoutes");
//middlewares

app.use(express.json());

app.use(router);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connected to mongodb!");
  })
  .catch((err) => {
    console.error("Error occurred while connecting with mongodb");
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
