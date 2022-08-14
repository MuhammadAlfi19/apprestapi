'use strict';

exports.ok = function(values,res) {
    const data = {
        'status': 200,
        'values':values
    }
     res.json(data);
     res.end()
}

// respon untuk matakuliah
exports.okNested = function(values, res) {
    // lakuka akumulasi
    const hasil = values.reduce((akumulasi, item) => {
       // tentukan key grup
       if(akumulasi[item.nama]) {
        // buatlah variabel grup nama mahasiswa
        const group = akumulasi[item.nama]
        // cek jika isi array adalah matakuliah
        if(Array.isArray(group.matakuliah)) {
            // tambahkan value ke dalam group matakuliah
            group.matakuliah.push(item.matakuliah)
        }else {
            group.matakuliah = [group.matakuliah, item.matakuliah]
        }
        
       }else {
           akumulasi[item.nama] = item  
       }
        return akumulasi
    },  {})

    const data = {
        'status': 200,
        'values': hasil
    }

    res.json(data)
    res.end()
}