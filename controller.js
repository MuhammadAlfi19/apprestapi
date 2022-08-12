'use strict'

const response = require("./res");
const connection = require("./koneksi");

// testing
exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan",res);
}

// menampilkan semua data siswa
exports.getDataMahasiswa = function(req,res) {
    connection.query("SELECT * FROM mahasiswa", function(error,rows,fileds) {
        if(error) {
         console.log(error)
        }else {
            response.ok(rows,res)
        }
    })
}
