import React, { Component } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


        return (
            <nav className='nav'>
                <Link to='/' className='title'>
                        <h2><span>T</span><span>T</span></h2>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
     
          <li className='nav-item'>
            <Link
              to='/austin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Austin
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/dallas'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Dallas
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
            </nav>
    );
  }



export default Nav;