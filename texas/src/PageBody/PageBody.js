import React, {Component} from 'react';
import './PageBody.css';

class PageBody extends Component {
    
    render(){
        return (
            <div>
                <section className="PageBody">
                    <div className = "articles">
                        <div className = "article" id = "ar1">
                            <p>Houston</p>
                        </div>
                        <div className = "article" id = "ar2">
                            <p>Austin</p>
                        </div>
                        <div className = "article" id = "ar3">
                            <p>Dallas</p>
                        </div>
                    </div>
                </section>
            </div>
        );

    }

}

export default PageBody;