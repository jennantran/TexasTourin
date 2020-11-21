import React from 'react';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer'
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Route exact path = '/' component={HomePage}/>
        <Footer/>
      </div>
    )
  }
}

export default App;