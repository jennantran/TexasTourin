import React, {Component} from 'react';
import './OurStory.css';
import About from '../About/About';

class OurStory extends Component { 
    render(){
        return (
            <div>
                <section className='OurStory'>
                </section>    
                <About></About>   
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
            </div>
        );
    }
}

export default OurStory;