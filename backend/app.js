const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const upload=require('express-fileupload');
app.use(upload());

const koneksi = require('cors');
app.use(koneksi());

const database = require('mysql');
const db = database.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'master',
    port: '3306'
})
db.connect();

var port = 5000;

// Hapus data list produk
app.post('/hapusDataProdList',(req,res)=>{
    var id = req.body.id;
    var sql = `DELETE FROM produk WHERE id_produk = "${id}" `;
    db.query(sql, (err,hasil)=>{
        if (err) throw err;
        res.send(hasil);
    })
})

// Ambil data produk
app.get('/dataproduk',(req,res)=>{
    // var dataProduk = req.body.dataProduk;
    var sql = `SELECT produk.id_produk, produk.nama_produk, produk.harga_produk, produk.stok_produk, kategori.nama_kategori, kategori.id_kategori FROM kategori INNER JOIN produk ON kategori.id_kategori = produk.id_kategori`;`SELECT * FROM produk`;
    db.query(sql,(err,result)=>{
        if (err) throw err;
        res.send(result)
    });
})

// Terima inputan tambah produk
app.post('/tambahdataProd',(req,res)=>{
    var fileName = req.files.foto.name;
    var namaProduk = req.body.namaproduk;
    var hargaProduk = req.body.hargaproduk;
    var stokProduk = req.body.stokproduk;
    var selectCategory = req.body.pilihankategori;
    // var a = parseInt(selectCategory);
    // console.log(typeof(a));
    // console.log(selectCategory);

    if(req.files){
        var fungsiFile = req.files.foto;
        fungsiFile.mv("./tampunganFile/"+fileName, (err)=>{
            if (err){
                console.log(err);
                res.send('Upload failed !');
            } else {
                var sql = `INSERT INTO produk VALUES ("${''}","${selectCategory}","${namaProduk}","${hargaProduk}","${stokProduk}","${fileName}")`;
                db.query(sql,(err,hasil)=>{
                    if (err) throw err;
                    else {
                        res.send(hasil);
                        console.log('Upload berhasil !')
                    }
                });
            }
        })
    }
});

app.get('/',(req,res)=>{
    var readData = 'SELECT * FROM users';
    db.query(readData, (err,hasil)=>{
        if (err) throw err;
        res.send(hasil);
    })
})

// Ambil data kategori
app.get('/datakategori',(req,res)=>{
    var readDataCat = `SELECT * FROM kategori`;
    db.query(readDataCat,(err,hasil)=>{
        if (err) throw err;
        res.send(hasil);
    })
})

// Hapus kategori
app.post('/hapuskategori',(req,res)=>{
    var delete_idCat = req.body.id;
    var sql = `DELETE FROM kategori WHERE id_kategori = "${delete_idCat}" `;
    db.query(sql,(err,hasil)=>{
        if (err) {
            var status = 'Data kategori gagal dihapus';
            res.send(status);
            throw err;
        } else {
            var status = 'Data kategori berhasil dihapus';
            res.send(status);
        }
    })
});

// Tambah data kategori baru
app.post('/datanewkategori',(req,res)=>{
    var namaKategori= req.body.namaKategori;
    var sql = `INSERT INTO kategori VALUES ("${''}","${namaKategori}")`;
    db.query(sql, (err,hasil)=>{
        if (err) {
            throw err;
        } else {
            res.send(hasil);
        }
    })
})

// Ambil data sub kategori
app.get('/datasubkategori',(req,res)=>{
    var readDataSubCat = `SELECT * FROM sub_kategori`;
    db.query(readDataSubCat,(err,hasil)=>{
        if (err) throw err;
        res.send(hasil);
    })
})

// Tambah data sub kategori
app.post('/tambahdataSubCat',(req,res)=>{
    var subcategoryname = req.body.inputNewSubCat;
    var categoryid = req.body.categoryid;
    var sql = `INSERT INTO sub_kategori VALUES ("${categoryid}","${subcategoryname}")`;
    db.query(sql,(err,result)=>{
        if (err) throw err;
        res.send('Data berhasil disimpan');
    });
})

// Hapus data sub kategori
app.post('/deletesubcat',(req,res)=>{
    var id = req.body.id;
    var sql = `DELETE FROM sub_kategori WHERE id="${id}" `;
    db.query(sql,(err,hasil)=>{
        if (err) {
            var status = 'Sub kategori gagal dihapus';
            res.send(status);
            throw err;
        } else {
            var status = 'Sub kategori berhasil dihapus';
            res.send(status);
        }
    });
})

// Setiing cookie
app.post('/login',(req,res)=>{
    var sql = `SELECT * FROM user`;
    db.query(sql,(err,hasil)=>{
        if (err){
            throw err;
        } else {
            var username = req.body.username;
            var password = req.body.password;

            for ( var i = 0;i < hasil.length; i++){
                if(username === hasil[i].username && password === hasil[i].password){
                    var userID = hasil[i].id;
                    res.send(userID.toString());
                    break;
                } else if (i === hasil.length - 1) {
                    res.send('-1');
                }
            }
        }
    });
});

// Tambah user baru
app.post('/daftarbaru',(req,res)=>{
    var full_name = req.body.nama;
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var sql = `INSERT INTO user (nama,username,password,email) VALUES ("${full_name}","${username}","${password}","${email}")`;
    db.query(sql,(err,hasil)=>{
        if (err){
            var status = 'User gagal terdaftar';
            res.send(status);
            throw err;
        } else {
            var status = 'User berhasil terdaftar';
            res.send('1');
        }
    })
})

app.listen(port, () =>{
    console.log(`Server berjalan di port ${port}...`)
})