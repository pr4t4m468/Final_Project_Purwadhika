import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class CategoryList extends Component {

    state = {
        dataKategori: []
    }

    componentDidMount(){
        axios.get('http://localhost:5000/datakategori')
        .then((ambilData)=>{
            this.setState(
                {
                    dataKategori : ambilData.data
                }
            )
        })
    }

    deleteData = (e) => {
        axios.post('http://localhost:5000/hapuskategori',{id:e})
        .then((hasil)=>{
            var resp = hasil.data;
            console.log(resp);
        })
        window.location.reload();
    }

  render() {
    const hasil = this.state.dataKategori.map(
        (isi,index) => {
            var urut = index + 1;
            var kategori_id = isi.id_kategori;
            var nama_kategori = isi.nama_kategori;

            return <tr key={index} style={{textAlign: 'center'}}>
                <td>{urut}</td>
                <td>{nama_kategori}</td>
                <td>
                    <button className="btn btn-warning"><i className="fa fa-pencil-square-o"></i></button> &nbsp;
                    <button className="btn btn-danger" onClick={()=> {if(window.confirm('Anda yakin hapus data ini ?')) this.deleteData(kategori_id)} }><i className="fa fa-trash"></i></button>
                </td>
            </tr>
        }
    );
    return (
      <div>
        <div className="container offset-md-2">
        <h2> Category List </h2><br/>
        <Link to="/addcat" type=" button" className="btn btn-primary mb-3 text-light"><i className="fa fa-plus-circle"> Add Category</i></Link>
                <table className="table borderless table-hover">
                    <thead className="thead-dark">
                        <tr>

                            <th scope="col" style={{textAlign: 'center'}}>Nomor</th>
                            <th scope="col" style={{textAlign: 'center'}}>Nama Kategori</th>
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

export default CategoryList;
