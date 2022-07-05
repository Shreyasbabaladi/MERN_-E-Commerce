const express = require("express");
const router = express.Router();
const { signout, signup } = require("../controllers/auth");
const { check } = require("express-validator");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("name must be at least 3 chars long"),
    check("email").isEmail().withMessage("Email is requrired"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("password must be at least 3 chars long"),
  ],
  signup
);

router.get("/signout", signout);

module.exports = router;
