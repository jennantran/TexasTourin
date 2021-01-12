import React, { Component } from 'react';
import {data} from "./AustinData";
import CategoryList from "./CategoryList";
import "./Austin.css";
import CityPage from '../CityPage/CityPage';

class Austin extends Component {
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
            <section className='austinPage'>
                <CategoryList categories = {this.state.categoriesCopy} handleBtns={this.handleBtns} btns = {this.state.btns}/>
                <CityPage></CityPage>
            </section>     
        );


export default Austin;