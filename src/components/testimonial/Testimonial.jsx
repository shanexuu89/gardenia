import React from 'react'
import './testimonial.css'

const Testimonial = ({ imgUrl, text, name }) => {
  return (
    <div className="gardenia__testimonials-container__testimonial">
      <div className="gardenia__testimonials-container__testimonial-content">
        <p>{text}</p>
      </div>
      <div className="gardenia__testimonials-container__testimonial-customer">
        <img
          src={imgUrl}
          alt="testimonial image"
        />
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Testimonial
