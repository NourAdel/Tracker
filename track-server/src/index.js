const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mongoUri =
  "mongodb+srv://admin:passwordpassword@cluster0-ab55u.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("connected to monge instance");
});

mongoose.connection.on("error", err => {
  console.log("Error connecting to mongo: ", err);
});

app.get("/", (req, res) => {
  res.send("hi there!");
});

app.listen(3000, () => {
  console.log("3000 listening");
});
