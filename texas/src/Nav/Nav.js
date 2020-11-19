import React, { Component } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Dropdown from '../Dropdown/Dropdown';


function Nav(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    }

        return (
            <nav className='nav'>
                <Link to='/' className='title'>
                        <h2><span>T</span><span>T</span></h2>
                </Link>
                <Dropdown></Dropdown>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        
                        />

            </nav>
    );
  }



export default Nav;