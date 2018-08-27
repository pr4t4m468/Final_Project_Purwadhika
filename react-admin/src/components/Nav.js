import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavDash extends Component {
  render() {
    return (
      <div>
        <div>
          <div id="wrapper">
            {/* Sidebar */}
            <ul className="sidebar">
              <Link className="navbar-brand mr-1" to="/">ProspeGO</Link>
              <li>
                {/* Search Box */}
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button"><i className="fa fa-search" /></button>
                    </div>
                  </div>
                </form>
              </li>
              <li className="nav-item active"><Link className="nav-link" to="/dashboard"><i className="fa fa-fw fa-tachometer" /><span> Dashboard</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="/product"><i className="fa fa-fw fa-table" /><span> Product List</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="/category"><i className="fa fa-fw fa-table" /><span> Category List</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="/subcategory"><i className="fa fa-fw fa-table" /><span> Sub Category List</span></Link></li>
              <li className="nav-item"><Link className="nav-link" to="/logout"><i className="fa fa-fw fa-sign-out" /><span> Log Out</span></Link></li>
            </ul>
            <div className="container pt-3">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavDash;