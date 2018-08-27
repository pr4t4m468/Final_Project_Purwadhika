import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductList extends Component {

    state = {
      dataProduk: [],
      dataKategori: []
    }

    componentDidMount(){
      axios.get('http://localhost:5000/dataproduk')
        .then((ambilData)=>{
            this.setState(
                {
                    dataProduk : ambilData.data
                }
            )
        })
    }

    deleteData = (e) => {
        axios.post('http://localhost:5000/hapusDataProdList',{
            id:e
        });
        window.location.reload();
    }

  render() {
    const hasil = this.state.dataProduk.map(
        (isi,index) => {
            var urut = index + 1;
            var id_produk = isi.id_produk;
            var id_kategori = isi.id_kategori;
            var nama_kategori = isi.nama_kategori;
            var nama_produk = isi.nama_produk;
            var harga_produk = isi.harga_produk;
            var stok_produk = isi.stok_produk;

            return <tr key={index} style={{textAlign: 'center'}}>
                <td>{urut}</td>
                <td>{nama_produk}</td>
                <td>{harga_produk}</td>
                <td>{stok_produk}</td>
                <td>{nama_kategori}</td>
                <td>
                    <button className="btn btn-warning"><i className="fa fa-pencil-square-o"></i></button> &nbsp;
                    <button className="btn btn-danger" onClick={() => {if(window.confirm('Anda yakin hapus data ini ?')) this.deleteData(id_produk)} }><i className="fa fa-trash"></i></button>
                </td>
            </tr>
        }
    );
    return (
      <div>
        <div className="container offset-md-2">
        <h2> Product List </h2><br/>
            <Link to="/addproduct" type=" button" className="btn btn-primary mb-3 text-light"><i className="fa fa-plus-circle"> Add Product</i></Link>
                <table className="table borderless table-hover">
                    <thead className="thead-dark">
                        <tr>

                            <th scope="col" style={{textAlign: 'center'}}>No.</th>
                            <th scope="col" style={{textAlign: 'center'}}>Nama Produk</th>
                            <th scope="col" style={{textAlign: 'center'}}>Harga</th>
                            <th scope="col" style={{textAlign: 'center'}}>Jumlah Stok</th>
                            <th scope="col" style={{textAlign: 'center'}}>Kategori</th>
                            <th scope="col" style={{textAlign: 'center'}}>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {hasil}
                    </tbody>
                </table>
            </div>
      </div>
    )
  }
}

export default ProductList;
