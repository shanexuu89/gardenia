import React from 'react'
import './service.css'

const Service = ({ imgUrl, title, text }) => {
  return (
    <div className="gardenia__services-container__service">
      <div className="gardenia__services-container__img">
        <img
          src={imgUrl}
          alt="service image"
        />
      </div>
      <div className="gardenia__services-container__service-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Service
