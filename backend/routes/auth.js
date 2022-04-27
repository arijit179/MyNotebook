const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const Joi = require('joi');

const JWT_SECRET = "arijitisagoodb$oy@";
// Route: 1 Autenticate a User using: POST "/api/auth/createuser" . no login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 chracters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors , return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    // Check whether the user with this email already exists
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success, error: "Please enter valid credentials" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      // res.json(user)
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server error");
    }
  }
);
// Route: 2 Autenticate a User using: POST "/api/auth/login" . No login required
router.post("/login", async (req, res) => {
  let { value, errors } = Joi
    .object({
      email: Joi.string()
        .lowercase()
        .trim()
        .required()
        .email()
        .pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        .error(new Error("Invalid Email Input!")),
      password: Joi.string()
        .pattern(
          new RegExp(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$"
          )
        )
        .required()
        .error(new Error("Invalid Password Input!")),
    })
    .validate(req.body);
  let success = false;
  // If there are errors , return bad request and the errors
  if (errors) {
    return res.status(400).json({success ,  errors: errors.array() });
  }
  try {
    let user = await User.findOne({email:value.email});
    if (!user) {
      return res
        .status(400)
        .json({ success, error: "Please enter valid credentials" });
    }
    const passwordCompare = await bcrypt.compare(value.password, user.password);
    if (!passwordCompare) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "Please enter valid credentials" });
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server error");
  }
});
module.exports = router;

// Route: 3 Autenticate a User using: POST "/api/auth/getuser" . Login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server error");
  }
});
module.exports = router;

// .then(user => res.json(user))
//   .catch(err=> {console.log(err)
//     res.json({error:'Please enter a valid email',message: err.message})})
