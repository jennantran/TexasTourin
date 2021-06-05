import React, {Component} from 'react';
import './OurStory.css';
import About from '../About/About';
import Contact from '../Contact/Contact';

class OurStory extends Component { 
    render(){
        return (
            <div>
                <section className='OurStory'>
                </section>    
                <About></About>  
            </div>
        );
    }
}

export default OurStory;