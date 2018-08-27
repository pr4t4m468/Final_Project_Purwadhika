import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookies = new Cookies();

export default class Login extends Component {
    state = {
        login:false
    }
    value = (e) => {
        axios.post('http://localhost:5000/login',{
            username:  e.uname.value,
            password: e.pwd.value
        })
        .then((LoginData)=>{
            var logindata = LoginData.data;
            if (logindata != -1){
                cookies.set('login',logindata,{path:'/'});
                this.setState({
                    login:true
                })
            } else {
                console.log('Gagal');
            }
        });
    }
    render() {
        if(this.state.login) return <Redirect to="/dashboard" />
        return (
            <div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                {/* form card login */}
                                <div className="card rounded-0">
                                    <div className="card-header">
                                        <h3 className="mb-0">Login</h3>
                                    </div>
                                    <div className="card-body">
                                        <form className="form" role="form" method="POST">
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input type="text" className="form-control form-control-lg rounded-0" ref="uname" id="uname1"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control form-control-lg rounded-0" ref="pwd" id="pwd1"/>
                                            </div>
                                            <button type="button" className="btn btn-success btn-lg float-right" onClick={() => this.value(this.refs)} id="btnLogin">Login</button>
                                        </form>
                                    </div>
                                    {/*/card-block*/}
                                </div>
                                {/* /form card login */}
                            </div>
                        </div>
                        {/*/row*/}
                    </div>
                    {/*/col*/}
                </div>
                {/*/row*/}
            </div>
            {/*/container*/}

            </div>
        )
    }
}
