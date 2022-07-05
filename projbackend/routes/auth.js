const express = require("express");
const router = express.Router();
const { signin, signup } = require("../controllers/auth");
const { check } = require("express-validator");

//Router for signup
router.post(
  "/signup",
  [
    check("name").isLength({ min: 3 }).withMessage("name must be at least 3 chars long"),
    check("email").isEmail().withMessage("Email is required"),
    check("password").isLength({ min: 3 }).withMessage("password must be at least 3 chars long"),
  ],
  signup
);

//Router for signin
router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("Email is required"),
    check("password").isLength({ min: 1 }).withMessage("password field is required"),
  ],
  signin
);

module.exports = router;
