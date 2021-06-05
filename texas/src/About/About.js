import React, {Component} from 'react';
import Jenn from '../images/Jenn.jpg'
import Raf from '../images/Raf.jpg'
import Ira from '../images/Ira.jpg'
import './About.css';


class About extends Component {
    render(){
        return (
            <section className='about'>
                <section className='profilePics'>
                    <h1 className='meetTeam'>Meet the Team</h1>
                    <img src={Jenn} className='team' alt='jenn'/>
                    <img src={Raf} className='team' alt='raf'/>   
                    <img src={Ira}  className='team' alt='ira'/>
                </section>
                <section className='teamInfo'>
                    <p className='story'> We, Ira Mascardo, Jennifer Tran, and Rafael Loredo, are a group of coding enthusiasts. We all met as coworkers in Plano, Texas at a reputable tech company. Every week,
                        we often met up and explore the city. With the city's limitness offerings of restaurants, and activities,
                        we found it hard to find online resources to quickly find the city hotspots. Texas Tourin came to fruition to help
                        fellow adventurers navigate the city and fall in love with the LoneStar state. 
                    </p>
               </section>
            </section>
        );

    }

}

export default About;