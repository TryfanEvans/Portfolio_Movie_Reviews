import React from 'react'

export default function MovieReview(props) {
    return (
        <div className = 'MovieReview'>
            <img src = {props.image} />
            <div>
            <h1> {props.title}</h1>
           
            <p> {props.summary} </p>
            </div>
        </div>
    )
}
