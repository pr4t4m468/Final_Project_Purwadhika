import React, { Component } from 'react';
import Nav from './Nav';
import ProductList from './ProductList';

export default class Product extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <ProductList/>
      </div>
    )
  }
}
