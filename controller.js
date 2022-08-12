'use strict'

const response = require("./res");
const connection = require("./koneksi");

// testing
exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan",res);
}

// menampilkan semua data siswa
exports.getDataMahasiswa = function(req,res) {
    connection.query("SELECT * FROM mahasiswa", function(error,rows,fields) {
        if(error) {
         console.log(error)
        }else {
            response.ok(rows,res)
        }
    })
}

// menampilkan data sesuai id
exports.getDataMahasiswaById = function(req,res) {
    let id = req.params.id
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = "+id+"", function(error,rows,fields) {
        if(error) {
            console.log(error)
           }else {
               response.ok(rows,res)
           }
    })
}
