import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';

const cookies = new Cookies();

export default class Logout extends Component {
  render() {
      cookies.remove('login');
      if ( cookies.get('login') === undefined ) return <Redirect to="/" />
    return (
        <div>
            
        </div>
    )
  }
}
