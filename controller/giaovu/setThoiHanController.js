const { off } = require('../../dbConnection/dbConnection');
const connection = require('../../dbConnection/dbConnection');


module.exports.setThoiHan = (req, res) => {
    let kihoc = req.body.kihoc
    let hanmo = req.body.hanmo
    let handong = req.body.handong
    let setThoiHansql = `UPDATE thoihandki SET kihoc = '${kihoc}', hanmo = '${hanmo}', handong = '${handong}'`
    connection.query(setThoiHansql, (err, result) => {
        if (err) throw err
        else {
            res.json({
                status: true,
                message: 'Đã thay đổi thời hạn'
            })
        }
    })
}