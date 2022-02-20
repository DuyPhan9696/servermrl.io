const { off } = require('../../dbConnection/dbConnection');
const connection = require('../../dbConnection/dbConnection');

module.exports.suadon = (req, res) => {
    let madon = req.body.madon
    let malop = req.body.malop
    //get date
    let date_ob = new Date();
    let day = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let date = day + "-" + month + "-" + year;
    //check trang thái
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
                    message: "Không thể sửa đơn"
                })
            } else {
                // update sql
                let updatesql = `UPDATE don_mrl SET malop = '${malop}', ngaytao = '${date}' WHERE madon = ${madon}`
                connection.query(updatesql, (err, data) => {
                    if (err) {
                        console.log(err)
                        res.json({
                            status: false,
                            message: 'Mã lớp không đúng',
                        })
                    }
                    else {
                        res.json({
                            status: true,
                            message: 'Sửa thành công'
                        })
                    }
                })
            }
        }
    })

}