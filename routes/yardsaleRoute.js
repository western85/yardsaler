const express = require("express");
const router = express.Router();
const Yardsale = require("../models/yardsaleModel");

router.route("/create").post(async (req, res) => {
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const date = req.body.date;
  const newYardsale = await new Yardsale({
    address,
    city,
    state,
    zip,
    date,
  });
  newYardsale.save();
});

router.route("/yardsales").get((req, res) => {
  Yardsale.find().then((foundYardsales) => res.json(foundYardsales));
});

router.route("/delete/:id").delete(async (req, res) => {
  const id = req.params.id;

  Yardsale.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      console.log("Yardsale deleted");
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
