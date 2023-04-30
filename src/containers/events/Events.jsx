import React from 'react'
import './events.css'
import { Event } from '../../components'
import { event01, event02, event03 } from './imports'

const Events = () => {
  return (
    <div
      className="gardenia__events section__padding"
      id="events"
    >
      <div className="gardenia__events-heading">
        <h1>Upcoming Events</h1>
      </div>
      <div className="gardenia__events-cards  grid grid--3-cols">
        <div className="gardenia__events-card">
          <Event
            imgUrl={event01}
            title="Annual Plant Sale"
            text="May 22, 2025 – May 26, 2025"
          />
        </div>
        <div className="gardenia__events-card">
          <Event
            imgUrl={event02}
            title="Gardenia Community Meeting"
            text="May 22, 2025 – May 26, 2025"
          />
        </div>
        <div className="gardenia__events-card">
          <Event
            imgUrl={event03}
            title="Free Compost Workshop
            "
            text="May 22, 2025 – May 26, 2025"
          />
        </div>
      </div>
    </div>
  )
}

export default Events
