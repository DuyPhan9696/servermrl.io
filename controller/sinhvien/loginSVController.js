const { off } = require('../../dbConnection/dbConnection');
const connection = require('../../dbConnection/dbConnection');

module.exports.loginsv = function (req, res) {
    var email = req.body.email
    var password = req.body.password
    // connection.query('SELECT * FROM thoihandki', (err, dateTime) => {
    //     if (err) {
    //         res.json({
    //             status: false,
    //             message: 'there are some error with query'
    //         })
    //     }
    connection.query('SELECT * FROM sinhvien WHERE email = ?', [email], function (error, results) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            if (results.length > 0) {
                if (password == results[0].password) {
                    res.json({
                        status: true,
                        results
                    })

                } else {
                    res.json({
                        status: false,
                        message: "Email and password does not match"
                    });
                }

            }
            else {
                res.json({
                    status: false,
                    message: "Email does not exits"
                });
            }
        }
    })
    // })
}