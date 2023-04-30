import React from 'react'
import './event.css'

const Event = ({ imgUrl, title, text }) => {
  return (
    <div className="gardenia__events-container__event">
      <div className="gardenia__events-container__img">
        <img
          src={imgUrl}
          alt="event"
        />
      </div>
      <div className="gardenia__events-container__event-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Event
