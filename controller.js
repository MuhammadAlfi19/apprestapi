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

// Menambahkan data mahasiswa
exports.tambahMahasiswa = function(req,res) {
    const nim = req.body.nim
    const nama = req.body.nama
    const jurusan = req.body.jurusan

    connection.query("INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)",[nim,nama,jurusan],function(error,rows,field) {
        if(error) {
            console.log(error)
           }else {
               response.ok("Berhasil Menambahkan Data",res)
           } 
    })
}

// Mengubah Data Mahasiswa
exports.ubahData = function(req,res) {
    const id = req.body.id_mahasiswa;
    const nim = req.body.nim;
    const nama = req.body.nama;
    const jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', [nim, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data", res)
            }
        });
}
