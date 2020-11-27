import React from 'react';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer'
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom';
import PageBody from './PageBody/PageBody';
import Austin from './Austin/Austin';


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Route exact path = '/' component={HomePage}/>
        <Route path = '/Austin' component={Austin}/>
        <PageBody></PageBody>
        <Footer/>
      </div>
      
    )
  }
}

export default App;