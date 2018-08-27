import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Register extends Component {
  state = {
      redirect: false
  }

  value = (e) => {
      axios.post('http://localhost:5000/daftarbaru',{
        nama: e.full_name.value,
        username: e.uname.value,
        password: e.pwd.value,
        email: e.email.value
      }).then((hasil)=>{
          var resp = hasil.data;
          if(resp === 1) {
            this.setState ( {redirect:true} )
          }
      })
  }
  render() {
      if(this.state.redirect) return <Redirect to="/" />
    return (
    <div>
        <div className="text-center">
            <div className="container pt-5">
            <h1>○ Prosper0 ○</h1>
                <div className="row justify-content-sm-center">
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center">
                    <h3 className="pt-3">Register</h3>
                        <div className="card-body mx-3 my-1">
                            <form className="form-signin">
                                <input type="text" className="form-control mb-2" ref="full_name" placeholder="Full Name" required />
                                <input type="text" className="form-control mb-2" ref="uname" placeholder="Username" required />
                                <input type="password" className="form-control mb-2" ref="pwd" placeholder="Password" required />
                                <input type="email" className="form-control mb-2" ref="email" placeholder="Email" required />
                                <button type="button" onClick={ () => this.value(this.refs) } className="btn btn-lg btn-primary btn-block mb-1" type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
    )
  }
}

export default Register;