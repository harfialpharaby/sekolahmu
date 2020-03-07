const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

/* GET users listing. */
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/otp", userController.otp);

module.exports = router;
