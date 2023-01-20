import React from 'react'
import './Card.css'


function Card(props) {
    return (
        <div className='single__category'>
            <img src={props.image} />
            <p>{props.text}</p>
        </div>
    )
}

export default Card