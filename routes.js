'use strict'

module.exports = function(app) {
    const json = require("./controller")

    app.route('/').get(json.index)

    app.route("/tampil").get(json.getDataMahasiswa)
    
    app.route('/tampil/:id').get(json.getDataMahasiswaById)

    app.route('/tambah').post(json.tambahMahasiswa)

    app.route("/ubah").put(json.ubahData)

    app.route("/hapus").delete(json.hapusData)

    app.route("/tampilMatakuliah").get(json.tampilGroupMatakuliah)
}