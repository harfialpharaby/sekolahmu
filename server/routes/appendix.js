const express = require("express");
const router = express.Router();
const appendixController = require("../controllers/appendix");

/* GET users listing. */
router.get("/", appendixController.getData);

module.exports = router;
