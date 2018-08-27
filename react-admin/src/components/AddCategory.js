import React, { Component } from "react";
import axios from 'axios';
import Nav from './Nav';

export default class AddCategory extends Component {
    state = {
        // datacat:[],
        id:''
    }

    kirimsemua = (e) => {
        axios.post('http://localhost:5000/datanewkategori',{
            namaKategori: e.ref_namakategoribaru.value
        });
        window.location.reload();
    }
    
    render() {
        return (
            <div>
                <Nav/>
                <div className="container card col-md-5 mt-3">
                    <div className="card-header">Tambah Kategori Baru</div>
                    <div className="card-body">
                        <form>
                            <input type="hidden" className="form-control" ref="ref_idcat" defaultValue={this.state.id} />
                            <div className="form-group">
                                <label>Nama Kategori</label>
                                <input type="text" className="form-control" ref="ref_namakategoribaru" placeholder="Masukkan nama kategori baru" required />
                            </div>
                            <button type="button" onClick={ () => this.kirimsemua(this.refs) } className="btn btn-primary mb-2">Tambah Kategori Baru</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}