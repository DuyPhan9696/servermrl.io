const { off } = require('../../dbConnection/dbConnection');
const connection = require('../../dbConnection/dbConnection');

module.exports.xoadon = (req, res) => {
    let madon = req.body.madon
    //delete sql
    let xoasql = `DELETE FROM don_mrl WHERE madon = '${madon}'`
    connection.query(xoasql, (err, data) => {
        if (err) throw err
        else {
            res.json({
                status: true,
                message: 'Xoá đơn thành công'
            })
        }
    })
}