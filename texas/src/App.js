import React from 'react';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer'
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom';
import PageBody from './PageBody/PageBody';


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Route exact path = '/' component={HomePage}/>
        <PageBody></PageBody>
        <Footer/>
      </div>
      
    )
  }
}

export default App;