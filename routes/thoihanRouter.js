const express = require("express");
const setThoiHanController = require('../controller/giaovu/setThoiHanController')

let router = express.Router()

router.post('/', setThoiHanController.setThoiHan)

module.exports = router