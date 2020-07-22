import React from 'react';

// importing stylesheet
import './style.css';

function OutlineCard({ children, ...props }) {
    return (
        <div {...props} className={props.className + " outlineCard"}>
            {children}
        </div>
    )
}

export default OutlineCard;