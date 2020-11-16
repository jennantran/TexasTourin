import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Nav from './Nav/Nav';

class  App extends Component {
  constructor(){
    return (
      <div className='App'>
          <nav><Nav/></nav>
          <Route exact path='/' component={HomePage}/>
      </div>
    );
  }
}
export default App;
