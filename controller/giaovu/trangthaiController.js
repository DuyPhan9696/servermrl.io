const { off } = require('../../dbConnection/dbConnection');
const connection = require('../../dbConnection/dbConnection');

module.exports.trangthai = (req, res) => {
    let madon = req.body.madon
    let trangthai = ''
    let trangthaisql = `SELECT trangthai FROM don_mrl WHERE madon = '${madon}'`
    connection.query(trangthaisql, (err, result) => {
        result.map((row) => {
            trangthai = row.trangthai
        })
        if (err) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            if (trangthai === 'Chưa xử lý') {
                let ttdangxlsql = `UPDATE don_mrl SET trangthai = 'Đang xử lý' WHERE madon = ${madon}`
                connection.query(ttdangxlsql, (err, result) => {
                    if (err) {
                        res.json({
                            status: false,
                            message: 'there are some error with query'
                        })
                    } else {
                        res.json({
                            status: true,
                            message: 'Đơn đã thay đổi thành đang xử lý'
                        })
                    }
                })
            } else if (trangthai === 'Đang xử lý') {
                let ttdaxlsql = `UPDATE don_mrl SET trangthai = 'Đã xử lý' WHERE madon = ${madon}`
                connection.query((ttdaxlsql), (err, result) => {
                    if (err) {
                        res.json({
                            status: false,
                            message: 'there are some error with query'
                        })
                    } else {
                        res.json({
                            status: true,
                            message: 'Đơn đã thay đổi thành đã xử lý'
                        })
                    }
                })
            } else {
                res.json({
                    status: false,
                    message: 'Đơn đã xử lý'
                })
            }
        }
    })
}