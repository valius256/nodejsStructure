const { getHomePage, getPhat } = require("../controllers/homeController");
const express = require("express");
const router = express.Router();

// khai bao router
router.get("/", getHomePage);

router.get("/phat", getPhat);

module.exports = router; // export default
