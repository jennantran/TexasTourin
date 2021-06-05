import React, { Component } from 'react';
import PageBody from '../PageBody/PageBody';
import './HomePage.css';

class HomePage extends Component{
    render(){
        return(
           <div>
               <section className='homePage'>
                    <h1 className='texasTitle'>Texas Tourin</h1>
                    <h2 className='texasMotto'>Taste. Discover. Enjoy Texas.</h2>
               </section>
               <PageBody></PageBody>
           </div>
        );
    }
}


export default HomePage;