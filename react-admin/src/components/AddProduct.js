import React, { Component } from "react";
import axios from 'axios';
import Nav from './Nav';

export default class AddProduct extends Component {
    state = {
        datasubcat:[],
        selectCategory:[],
        fotoproduk: ''
    }

  componentDidMount(){
      axios.get('http://localhost:5000/datakategori').then((CatData)=>{
          this.setState({
              selectCategory:CatData.data
          });
      });
  }

    // tambahData = (e) => {
    //     axios.post('http://localhost:5000/tambahdataProd',{
    //         input_NamaProdukBaru: e.ref_namaprodukbaru.value,
    //         input_HargaProdukBaru: e.ref_hargaprodukbaru.value,
    //         input_StokProdukBaru: e.ref_stokprodukbaru.value,
    //         select_category: this.category.value
    //     });
    //     window.location.reload();
    // }

    fileChangedHandler = (e) => {
      switch(e.target.name){
        case'fotoproduk':
        this.setState({
          gambar:e.target.files[0]
        });
        break;
        default:
      }
    }

    value = (e) => {
      this.setState({
        namaproduk:e.ref_namaprodukbaru.value,
        hargaproduk:e.ref_hargaprodukbaru.value,
        stokproduk:e.ref_stokprodukbaru.value,
        kategori:e.category.value
      });
    }

    kirimsemua = (e) => {
      e.preventDefault();
      let formData = new FormData();

      formData.append('foto',this.state.gambar);
      formData.append('namaproduk',this.state.namaproduk);
      formData.append('hargaproduk',this.state.hargaproduk);
      formData.append('stokproduk',this.state.stokproduk);
      formData.append('pilihankategori',this.state.kategori);
      axios.post('http://localhost:5000/tambahdataProd',formData);
      window.location.reload();
    }
    
    render() {
        const selectCategory = this.state.selectCategory.map((isi,index)=>{
            var categoryID = isi.id_kategori;
            var categoryName = isi.nama_kategori;
            return <option key={index} value={categoryID}>{categoryName}</option>
        });
        return (
            <div>
                <Nav/>
                <div className="container card col-md-5 mt-3">
                    <div className="card-header">Tambah Produk Baru</div>
                    <div className="card-body">
                        <form onSubmit={this.kirimsemua}>
                            <div className="form-group">
                                <label>Nama Produk</label>
                                <input type="text" className="form-control" ref="ref_namaprodukbaru" placeholder="Masukkan nama produknya" required />
                            </div>
                            <div className="form-group">
                                <label>Harga Produk</label>
                                <input type="number" min="0" className="form-control" ref="ref_hargaprodukbaru" placeholder="Masukkan harga produknya" required />
                            </div>
                            <div className="form-group">
                                <label>Stok Produk</label>
                                <input type="number" min="0" className="form-control" ref="ref_stokprodukbaru" placeholder="Masukkan total stok produk" required />
                            </div>
                            {/* Upload Gambar Produk */}
                            <div className="form-group">
                                <label>Upload Gambar</label>
                                <input type="file" className="form-control" onChange={this.fileChangedHandler} name="fotoproduk" required />
                            </div>
                            <div className="form-group">
                                <label>Kategori</label>
                                <select type="text" className="form-control" ref="category" >
                                    {selectCategory}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2" onClick={ () => this.value(this.refs)}>Tambah Produk Baru</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}