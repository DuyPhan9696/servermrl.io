const { off } = require('../../dbConnection/dbConnection');
const connection = require('../../dbConnection/dbConnection');

module.exports.lop = function (req, res) {
    let malop = req.body.malop
    let sql = `SELECT * FROM lop INNER JOIN hocphan ON lop.mahocphan = hocphan.mahocphan WHERE lop.malop = ${malop}`
    connection.query(sql, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        }
        else {
            res.json({
                status: true,
                results
            })
        }
    })
}