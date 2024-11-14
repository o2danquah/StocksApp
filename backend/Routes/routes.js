const express = require("express")
const {getDrugs, postDrugs} = require ("../Controllers/Drugs")

const router = express.Router();

router.get("/showdrugs", getDrugs)
router.post("/inputdrugs", postDrugs)

module.exports = router