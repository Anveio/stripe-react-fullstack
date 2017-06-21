const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/Catalogue", userController.showUser);

module.exports = router;