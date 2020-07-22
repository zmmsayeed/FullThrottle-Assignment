import React from 'react';

// importing stylesheet
import './style.css';

function Card({ children, ...props }) {
    return (
        <div {...props} className={props.className + " customCard"}>
            {children}
        </div>
    )
}

export default Card;