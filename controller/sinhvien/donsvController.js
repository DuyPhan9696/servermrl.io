const { off } = require('../../dbConnection/dbConnection');
const connection = require('../../dbConnection/dbConnection');

module.exports.donsv = (req, res) => {
    let id = req.body.id
    connection.query('SELECT * FROM thoihandki', (err, dateTime) => {
        if (err) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        }
        // don_mrl.madon, don_mrl.ngaytao,lop.malop,lop.loailop,hocphan.mahocphan, hocphan.tenhocphan
        let sql = `SELECT * FROM don_mrl INNER JOIN lop ON don_mrl.malop = lop.malop INNER JOIN hocphan ON lop.mahocphan = hocphan.mahocphan WHERE don_mrl.masinhvien = ${id}`
        connection.query(sql, function (error, results) {
            if (error) {
                res.json({
                    status: false,
                    message: 'there are some error with query'
                })
            } else {
                if (results.length > 0) {
                    res.json({
                        status: true,
                        results,
                        dateTime
                    })
                }
                else {
                    res.json({
                        status: true,
                        results,
                        dateTime
                    })
                }
            }
        })
    })
}
