const { off } = require('../../dbConnection/dbConnection');
const connection = require('../../dbConnection/dbConnection');

module.exports.xemdsdon = (req, res) => {
    connection.query('SELECT * FROM thoihandki', (err, dateTime) => {
        if (err) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        }

        let dsdonsql = `SELECT * FROM don_mrl 
        INNER JOIN lop ON don_mrl.malop = lop.malop 
        INNER JOIN hocphan ON lop.mahocphan = hocphan.mahocphan 
        ORDER BY ( CASE don_mrl.trangthai 
        WHEN 'Chưa xử lý' THEN 1 
        WHEN 'Đang xử lý' THEN 2
        WHEN 'Đã xử lý' THEN 3
        END) ASC, don_mrl.madon DESC`

        connection.query(dsdonsql, (err, results) => {
            if (err) throw err
            else {
                if (results.length > 0) {
                    res.json({
                        status: true,
                        results,
                        dateTime
                    })
                } else {
                    res.json({
                        status: false,
                        message: 'Không có đơn nào'
                    })
                }
            }
        })

    })
}