const { off } = require('../../dbConnection/dbConnection');
const connection = require('../../dbConnection/dbConnection');

module.exports.themdon = (req, res) => {
    let id = req.body.id
    let malop = req.body.malop
    //get date
    let date_ob = new Date();
    let day = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let date = day + "-" + month + "-" + year;
    // create madon
    let madon = Math.floor(Math.random() * 90000000) + 10000000
    // insert into dababase
    let ktralop = `SELECT malop, masinhvien FROM don_mrl WHERE masinhvien = '${id}' AND malop = '${malop}'`
    connection.query(ktralop, (err, result) => {
        if (err) throw err
        else {
            if (result.length > 0) {
                res.json({
                    status: false,
                    message: 'Đơn đã tồn tại'
                })
            } else {
                let themsql = `INSERT INTO don_mrl (madon, malop, ngaytao, masinhvien, trangthai) VALUES('${madon}','${malop}','${date}','${id}','Chưa xử lý');`
                connection.query(themsql, (err, data) => {
                    if (err) throw err
                    else {
                        res.json({
                            status: true,
                            message: 'Thêm thành công'
                        })
                    }
                })
            }
        }
    })

}