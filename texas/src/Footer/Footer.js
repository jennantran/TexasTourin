import React, { Component } from 'react';
import './Footer.css';

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
            Our Story
          <br />
          <br />
            Contact Us
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