import React from 'react';
import HomePage from './HomePage/HomePage';
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Route exact path = '/' component={HomePage}/>
      </div>
    )
  }
}

export default App;