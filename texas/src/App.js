import React from 'react';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer'


class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
        <HomePage></HomePage>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;