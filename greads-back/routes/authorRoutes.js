const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/authorsController");

router.get("/", authorsController.getAll);

module.exports = router;
