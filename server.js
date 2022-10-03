const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Router } = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

//body-parser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//DB Config
const uri = process.env.URI_KEY;

//connnect to MongoDB
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoDB Connected...");
  })
  .catch((err) => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//require Router
app.use("/api/users", users);
app.use("/", require("./routes/yardsaleRoute"));


const port = process.env.PORT || 3001;

app.listen(3001, () => {
  console.log(`listening on port ${port}`);
});
