const express = require("express")
const {getDrugs, postDrugs} = require ("../Controllers/Drugs")

const router = express.Router();

router.get("/showdrugs", getDrugs)
router.post("/druginput", postDrugs)

module.exports = router