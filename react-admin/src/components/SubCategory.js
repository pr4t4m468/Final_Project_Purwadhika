import React, { Component } from 'react';
import Nav from './Nav';
import SubCategoryList from './SubCategoryList';

export default class SubCategory extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <SubCategoryList/>
      </div>
    )
  }
}
