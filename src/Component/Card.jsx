import React from 'react'
import "../component/Card.css"

function Card({ image, title, title1 }) {
  return (
    <div class="card">
    <div class="img">
      <img src={image} alt="" />
    </div>
    <span>{title}</span>
    <p class="info">{title1}</p>
    </div>
  

  )
}

export default Card