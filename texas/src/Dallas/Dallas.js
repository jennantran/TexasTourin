import React, { Component } from 'react';
import CategoryList from "./CategoryList";
import CityPage from '../CityPage/CityPage';
import './Dallas.css';


class Dallas extends Component{
    state = {
        categories: [],
        categoriesCopy: [],
        btns: ['All', 'Austin', 'Dallas', 'Houston']
      };

      async componentDidMount() {
        try {
          const res = await fetch('http://127.0.0.1:8000/api/blogs/?format=json'); // fetching the data from api, before the page loaded
          const categories = await res.json();
          this.setState({
            categories
          });
        } catch (e) {
          console.log(e);
        }
      }
    // Filter function
    handleBtns = (e) => {
        console.log(e.target.value);
        let categoriesCopy;

        if (e.target.value === "All"){
            categoriesCopy = this.state.categories;
        }
        else {
            categoriesCopy = this.state.categories.filter(item => item.city === e.target.value);
        }

        this.setState({
            categoriesCopy:categoriesCopy
        })
    }  
    
    
    render(){
        return(
            <div>
            <section className='dallasPage'>
                <CategoryList categories = {this.state.categoriesCopy} handleBtns={this.handleBtns} btns = {this.state.btns}/>
                <CityPage></CityPage>
            </section>  
            </div>

        )
    }
}

export default Dallas;