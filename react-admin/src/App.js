import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Login from './components/Login';
import Product from './components/Product';
import AddProduct from './components/AddProduct';
import Category from './components/Category';
import AddCategory from './components/AddCategory';
import Dashboard from './components/Dashboard';
import SubCategory from './components/SubCategory';
import Logout from './components/Logout';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/product' component={Product} />
        <Route path='/addproduct' component={AddProduct} />
        <Route path='/category' component={Category} />
        <Route path='/addcat' component={AddCategory} />
        <Route path='/subcategory' component={SubCategory} />
        <Route path='/logout' component={Logout} />
      </div>
    );
  }
}

export default App;
