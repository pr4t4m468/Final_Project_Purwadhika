import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import ListProduct from './components/ListProduct';
import Content from './components/Content';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Content}/>
        <Route path='/product' component={ListProduct}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        
      </div>
    );
  }
}

export default App;
