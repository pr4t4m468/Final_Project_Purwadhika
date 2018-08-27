import React, { Component } from 'react';
import CategoryList from './CategoryList';
import Nav from './Nav';

export default class Category extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <CategoryList/>
      </div>
    )
  }
}
