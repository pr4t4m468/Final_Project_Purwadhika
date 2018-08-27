// import React, { Component } from 'react'
// import axios from 'axios';
// import Nav from './Nav'

// class DataTable extends Component {

//     state = {
//         datakategori: []
//     }

//     componentDidMount(){
//         axios.get('http://localhost:5000/datatable')
//         .then((ambilData)=>{
//             this.setState(
//                 {
//                     datakategori : ambilData.data
//                 }
//             )
//         })
//     }

//     deleteData = (e) => {
//         axios.post('http://localhost:5000/deletedata',{
//             idOrang:e
//         })
//     }
//   render() {
//     const hasil = this.state.dataOrang.map(
//         (isi,index) => {
//             var urut = index + 1;
//             var nama_kategori = isi.FullName;

//             return <tr key={index} style={{textAlign: 'center'}}>
//                 <td>{nama_lengkap}</td>
//                 <td>{username}</td>
//                 <td>{email}</td>
//                 <td>
//                     <button className="btn btn-warning">Edit</button> &nbsp;
//                     <button className="btn btn-danger" onClick={()=> this.deleteData(urut)}>Delete</button>
//                 </td>
//             </tr>
//         }
//     );
//     return (
//       <div>
//         <div className="container offset-md-2">
//                 <table className="table borderless table-hover">
//                     <thead className="thead-dark">
//                         <tr>

//                             <th scope="col" style={{textAlign: 'center'}}>Nama Lengkap</th>
//                             <th scope="col" style={{textAlign: 'center'}}>Username</th>
//                             <th scope="col" style={{textAlign: 'center'}}>Email</th>
//                             <th scope="col" style={{textAlign: 'center'}}>Actions</th>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         {hasil}
//                     </tbody>
//                 </table>
//             </div>
//       </div>
//     )
//   }
// }

// export default DataTable;
