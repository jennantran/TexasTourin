import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component { 
    render(){
        return (
            <section className='contact'>
                <form className='contactUs'>
                    <label for='about'>What is this about?</label>
                    <select id='topic' name='topic'>
                        <option value='collab'>Collab with us</option>
                        <option value='recs'>Recommendations for new spots to explore</option>
                        <option value='other'>Other</option>
                    </select>
                </form>
            </section>
        );
    }
}

export default Contact;

