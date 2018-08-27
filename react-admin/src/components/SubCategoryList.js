import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

class SubCategory extends Component {

    state = {
        dataSubKategori: []
    }

    componentDidMount(){
        var self = this;
        axios.get('http://localhost:5000/datasubkategori')
        .then((ambilData)=>{
            self.setState(
                {
                    dataSubKategori : ambilData.data
                }
            )
        })
    }

    deleteData = (e) => {
        axios.post('http://localhost:5000/deletesubcat',{id:e})
        .then((hasil)=>{
            var resp = hasil.data;
            console.log(resp);
        })
        // window.location.reload();
    }

  render() {
    const hasil = this.state.dataSubKategori.map(
        (isi,index) => {
            var urut = index + 1;
            var nama_sub_kategori = isi.nama_sub_kategori;

            return <tr key={index} style={{textAlign: 'center'}}>
                <td>{urut}</td>
                <td>{nama_sub_kategori}</td>
                <td>
                    <button className="btn btn-warning"><i className="fa fa-pencil-square-o"></i></button> &nbsp;
                    <button className="btn btn-danger" onClick={()=> {if(window.confirm('Anda yakin ingin hapus data ini ?')) this.deleteData(urut)} }><i className="fa fa-trash"></i></button>
                </td>
            </tr>
        }
    );
    return (
      <div>
        <div className="container offset-md-2">
        <h2> Sub Category List </h2><br/>
            <Link to="/addsubcat" className="btn btn-primary mb-3 text-light" data-toggle="modal" data-target="#myModal"><i className="fa fa-plus-circle"> Add Sub Category</i></Link>
                <table className="table borderless table-hover">
                    <thead className="thead-dark">
                        <tr>

                            <th scope="col" style={{textAlign: 'center'}}>Nomor</th>
                            <th scope="col" style={{textAlign: 'center'}}>Sub Kategori</th>
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

export default SubCategory;
