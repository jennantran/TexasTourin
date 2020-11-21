import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <section className="footer">
            <hr className="footer-seperator" />
            <section className="footer-social-media">
              <a href="/" target="_blank" /*rel="noopener noreferrer"*/>LinkedIn</a>
            </section>
            <section className="footer-info">
              <section className="footer-info-left">
                <section className="footer-info__name">
                    Something #1
                </section>
                <section className="footer-info__returns">
                     Something #2
                  <br/>
                  Something #3
                </section>        
              </section>
              <section className="footer-info-center">
                <section className="footer-info__email">
                  texastourin@gmail.com
                </section>
                <section className="footer-info__terms">
                  Terms and Conditions
                  <br />
                  Copyright
                </section>
              </section>
              <section className="footer-info-right">
                <section className="footer-info__number">
                  555-555-5555
                </section>
                <section className="footer-info__contact">
                  Our Story
                  <br />
                  Contact Us
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