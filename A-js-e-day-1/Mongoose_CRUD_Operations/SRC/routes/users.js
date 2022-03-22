const express = require("express");
const user = require("../models/user");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.send("error" + err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send("error" + err);
  }
});
router.post("/", async (req, res) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });

    const user1 = await user.save();
    res.json(user1);
  } catch (err) {
    res.send("error");
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.firstName = req.body.firstName;
    const user1 = await user.save();
    res.json(user1);
  } catch (err) {
    res.send("error");
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.firstName = req.body.firstName;
    const user1 = await user.remove();
  } catch (err) {
    res.send("error");
  }
});
module.exports = router;
