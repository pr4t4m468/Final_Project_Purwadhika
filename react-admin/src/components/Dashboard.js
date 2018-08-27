import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Nav from './Nav';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Dashboard extends Component {
  render() {
    if ( cookies.get('login') === undefined ) return <Redirect to="/" />
    return (
      <div>
        <Nav/>
      </div>
    )
  }
}
