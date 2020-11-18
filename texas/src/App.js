import React from 'react';
import HomePage from './HomePage/HomePage';
import Nav from './Nav/Nav';


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <HomePage/>
      </div>
    )
  }
}

export default App;