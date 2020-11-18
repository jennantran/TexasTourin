import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
        return (
        <section className='nav'>
            <div className='title'>
                    <h2><span>T</span><span>T</span></h2>
            </div>
            <i className='fas fa-bars'></i>
        </section>
    );
  }
}

export default Nav;