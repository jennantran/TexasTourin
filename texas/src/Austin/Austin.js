import React, { Component } from 'react';
<<<<<<< HEAD
import {data} from "./AustinData";
import CategoryList from "./CategoryList";
import "./Austin.css";
=======
import CityPage from '../CityPage/CityPage';
import './Austin.css';
>>>>>>> 5773eb42d4e61e43fd7097242eeb3bf7ace8c0b6

class Austin extends Component {

<<<<<<< HEAD
    state = {
        categories: data,
        categoriesCopy: data,
        btns: ['All', 'Shopping', 'Sight Seeing', 'Art', 'Food']
    }


    // Filter function
    handleBtns = (e) => {
        console.log(e.target.value);
        let categoriesCopy;

        if (e.target.value === "All"){
            categoriesCopy = this.state.categories;
        }
        else {
            categoriesCopy = this.state.categories.filter(item => item.cat === e.target.value);
        }

        this.setState({
            categoriesCopy:categoriesCopy
        })
    }

    render() {
        return (
            <div>
                <CategoryList categories = {this.state.categoriesCopy} handleBtns={this.handleBtns} btns = {this.state.btns}/>
            </div>
        );
=======
class Austin extends Component{
    render(){
        return(
            <div>
            <section className='austinPage'>
            </section>
            <CityPage></CityPage>
            </div>

        )
>>>>>>> 5773eb42d4e61e43fd7097242eeb3bf7ace8c0b6
    }
}

export default Austin;