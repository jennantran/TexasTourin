import React from 'react';
import FetchJson from './FetchJson/FetchJson';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer'
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom';
import Austin from './Austin/Austin';


class App extends React.Component {

  render() {
    return (
      <div>
        <Nav/>
        <Route exact path = '/' component={HomePage}/>
        <FetchJson/>
        <Route path = '/Austin' component={Austin}/>
        <Footer/>
      </div>
      
    )
  }
}

export default App;