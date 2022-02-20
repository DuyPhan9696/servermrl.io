const express = require("express")
const loginSVController = require('../controller/sinhvien/loginSVController')
const loginGVController = require('../controller/giaovu/loginGVController')
let router = express.Router()

// post req loginsv
router.post('/loginsv', loginSVController.loginsv)

//post req logingv
router.post('/logingv', loginGVController.logingv)

module.exports = router;