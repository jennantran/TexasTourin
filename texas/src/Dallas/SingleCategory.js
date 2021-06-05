import React from 'react';


export default function SingleCategory(props) {
    return (
        <React.Fragment>
            <div className = "single">
               {/* <p>{props.category.id}</p> */}
                <h1>{props.category.title}</h1>
                <p>{props.category.city}</p>
                <p>{props.category.category}</p>
                <p>{props.category.description}</p>
            </div>
        </React.Fragment>
    )
}