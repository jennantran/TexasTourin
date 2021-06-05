import React from 'react';
import SingleCategory from './SingleCategory'


export default function CategoryList(props){
    return (

        <React.Fragment>
             <div className = "btns">
                {/* Dynamic way of rendering buttons */}
                {props.btns.map((btn, index) => {
                    return(
                    <button key = {index} value = {btn} onClick = {props.handleBtns}>{btn}</button>
                    )
                })}
            </div>

            <div className = "category-center">
            {props.categories.map(category => {
                return <SingleCategory key = {category.id} category = {category}/>
            })}
        </div>
        </React.Fragment>
    )
}

