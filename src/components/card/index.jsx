import React from 'react'
import './style.css'

function Card(props) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="card card-popular">
        <img src={props.image} class="card-img-top" alt="..."></img>
      </div>
      <div className="card-content">
        <h5 className="card-title">{props.loc}</h5>
        <p className="card-text">{props.city}</p>
      </div>
    </div>
  )
}

export default Card
