const express = require("express");
const donsvController = require('../controller/sinhvien/donsvController');
const themdonController = require('../controller/sinhvien/themdonController')
const suadonController = require('../controller/sinhvien/suadonController')
const huydonController = require('../controller/sinhvien/huydonController')
const xemdsdonController = require('../controller/giaovu/xemdsdonController')
const trangthaiController = require('../controller/giaovu/trangthaiController')
const xoadonControlller = require('../controller/giaovu/xoadonController')

let router = express.Router()
//xem ds đơn
router.get('/dsdon', xemdsdonController.xemdsdon)
//thay đổi trạng thái
router.post('/trangthai', trangthaiController.trangthai)
// xoa don
router.post('/xoadon', xoadonControlller.xoadon)
// post id req donsv
router.post('/donsv', donsvController.donsv)
//them đơn
router.post('/themdon', themdonController.themdon)
//sua don
router.post('/suadon', suadonController.suadon)
//huydon
router.post('/huydon', huydonController.huydon)


module.exports = router;