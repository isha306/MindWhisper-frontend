import React from 'react'
import "../component/Card.css"
import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'

function Card({ image, title, title1,link1}) {
  return (
    <div class="card">
    <div class="img">
      <img src={image} alt="" />
    </div>
    <span>{title}</span>
    <p class="info">{title1}</p>
    <Button
          variant="gradient"
          gradient={{ from: 'rgba(181, 136, 136, 1)', to: 'rgba(143, 109, 97, 1)', deg: 0 }} >
          <Link to={link1}>know more</Link>
        </Button>
    </div>
  

  )
}

export default Card