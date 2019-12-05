const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
require("./models/User");
require("./models/Track");
const authRouter = require("./routs/authRouts");
const trackRouts = require("./routs/trackRouts");
const requireAuth = require("./middlewares/requireAuth");
const app = express();
app.use(bodyParser.json());
app.use(authRouter);
app.use(trackRouts);

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

app.get("/", requireAuth, (req, res) => {
  res.send(`your email is ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("3000 listening");
});
