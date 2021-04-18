import React, {Component} from 'react';
import './PageBody.css';
import Houston from '../images/Houston.jpg';
import Austin from '../images/austin.jpg';
import Dallas from '../images/dallas.jpg';

class PageBody extends Component {
    
    render(){
        return (
            <div>
                <section className="PageBody">
                    <div className = "articles">

                        <div className = "article">
                            <p>Houston</p>
                            <img src = {Houston} alt = "Houston" className = "image"></img>
                            <div className = "overlay overlayLeft">
                                <div class = "text">Left</div>
                            </div>
                        </div>

                        <div className = "article">
                            <p>Austin</p>
                            <img src = {Austin} alt = "Austin" className = "image"></img>
                            <div className = "overlay overlayLeft">
                                <div class = "text">Left</div>
                            </div>
                        </div>

                        <div className = "article">
                            <p>Dallas</p>
                            <img src = {Dallas} alt = "Dallas" className = "image"></img>
                            <div className = "overlay overlayLeft">
                                <div class = "text">Left</div>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>
        );

    }

}

export default PageBody;