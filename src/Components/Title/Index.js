import React from 'react'
import './Style.css';
const Title = ({title,subtitle}) => {
    return (
        <div className="titleglobal">
             <h3 className="texttitleglobal">{title}</h3>
             <p>{subtitle}</p>
        </div>
    )
}

export default Title
