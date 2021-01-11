import React from 'react';

export default function SingleCategory(props) {
    return (
        <React.Fragment>
            <div className = "single">
                <h1>{props.category.cat}</h1>
                <p>{props.category.name}</p>
                <p>{props.category.name2}</p>
                <p>{props.category.name3}</p>
                <p>{props.category.name4}</p>
                <p>{props.category.name5}</p>
            </div>
        </React.Fragment>
    )
}