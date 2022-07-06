const express = require("express");
const router = express.Router();
const { signin, signup, signout, isSignedIn } = require("../controllers/auth");
const { check } = require("express-validator");
const { Router } = require("express");

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

//Router for signout 
router.get("/signout", signout);

//Test Router 
router.get("/test",isSignedIn ,(req, res) => {
  res.json(req.auth)
})


module.exports = router;
