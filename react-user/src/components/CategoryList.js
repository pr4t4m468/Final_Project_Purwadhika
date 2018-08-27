import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class CategoryList extends Component {
    state = {
        dataKategori: []
    }
    componentDidMount(){
        var self = this;
        axios.get('http://localhost:5000/datakategori')
        .then((ambil)=>{
            this.setState( {dataKategori:ambil.data} )
        })
    }
  render() {
      const hasil = this.state.dataKategori.map(
          (isi,index)=>{
            var nama_kategori = isi.nama_kategori;
            return <Link to="#" className="list-group-item">{nama_kategori}</Link>
          }
      )
    return (
      <div>
        {hasil}
      </div>
    )
  }
}
