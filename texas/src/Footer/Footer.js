import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
<section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
       
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
        </section>
        <section className="footer-info-center">
          <section className="footer-info__contact">
          <Link
              to='/ourStory'
              className='ourStory'
            >
                Our Story
            </Link>
          <br />
          <br />
          <Link
              to='/contact-us'
              className='contact'
            >
                Contact us
            </Link>
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
            <div className="row">
          <p className="copyright">
            &copy;{new Date().getFullYear()} TEXAS TOURIN | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
          </section>
        );
    }
}

export default Footer;