import React from 'react';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer'
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom';
import Austin from './Austin/Austin';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Breadcrumbs/>
        <Route exact path = '/' component={HomePage}/>
        <Route path = '/Austin' component={Austin}/>
        <Footer/>
      </div>
      
    )
  }
}

export default App;