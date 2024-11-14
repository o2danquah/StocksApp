const express = require("express");
const { showEmployee, inputEmployee } = require("../Controllers/Employee");
const router = express.Router();

router.get("/showEmployee", showEmployee)
router.post("/inputEmployee", inputEmployee)

module.exports = router