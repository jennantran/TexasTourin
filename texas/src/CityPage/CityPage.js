import React, { Component } from 'react';
import Random1 from '../images/random1.jpg';
import './CityPage.css';

class CityPage extends Component{
    render(){
        return(
            <section className='cityArticles'>
                <section className='cityArticle 1'>
                    <img src={Random1} alt='random'/>
                    <section className='description'>
                        <h2 className='articleTitle'>Article Title 1</h2>
                        <p>"Begin today!" That's all the note said.</p>
                    </section>
                </section>
             
                <section className='cityArticle 2'>
                    <img src={Random1} alt='random'/>
                    <section className='description'>
                        <h2 className='articleTitle'>Article Title 1</h2>
                        <p className='sneakPreview'>"Begin today!" That's all the note said.</p>
                    </section>
                </section>
              
            </section>
        )
    }
}

export default CityPage;