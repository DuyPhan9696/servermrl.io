const { off } = require('../../dbConnection/dbConnection');
const connection = require('../../dbConnection/dbConnection');

module.exports.huydon = (req, res) => {
    let madon = req.body.madon
    //delete sql
    let trangthai = ''
    let trangthaisql = `SELECT trangthai FROM don_mrl WHERE madon = '${madon}'`
    connection.query(trangthaisql, (err, result) => {
        result.map((row) => {
            trangthai = row.trangthai
        })
        if (err) throw err
        else {
            if (trangthai === 'Đang xử lý' || trangthai === 'Đã xử lý') {
                res.json({
                    status: false,
                    message: "Không thể huỷ đơn"
                })
            } else {
                let huysql = `DELETE FROM don_mrl WHERE madon = '${madon}'`
                connection.query(huysql, (err, data) => {
                    if (err) throw err
                    else {
                        res.json({
                            status: true,
                            message: 'Huỷ đơn thành công'
                        })
                    }
                })
            }
        }
    })

}