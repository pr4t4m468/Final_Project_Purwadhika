import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Login extends Component {
  render() {
    return (
    <div>
        <div className="text-center">
            <div className="container pt-5">
            <h3>○ Prosper0 ○</h3>
                <div className="row justify-content-sm-center">
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center">
                    <div className="card-body mx-3">
                        <form className="form-signin">
                            <input type="text" className="form-control mb-2" placeholder="Username" required autofocus />
                            <input type="password" className="form-control mb-2" placeholder="Password" required />
                            <button className="btn btn-lg btn-primary btn-block mb-1" type="submit"><i className="fa fa-paper-plane"></i> Sign in</button>
                        </form>
                    </div>
                    <div className="card-footer">
                        <Link to="/register" className="btn btn-danger btn-sm"><i className="fa fa-plus"></i> Create an account</Link> <br/> <br/>
                        <Link to="/" className="btn btn-success btn-sm"><i className="fa fa-arrow-left"></i> Back to homepage</Link>
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

export default Login;
