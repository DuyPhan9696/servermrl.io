const express = require("express");
const lopController = require('../controller/sinhvien/lopController')

let router = express.Router()

// post id req donsv
router.post('/lopinfo', lopController.lop)

module.exports = router;