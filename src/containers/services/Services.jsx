import React from 'react'
import './services.css'
import { Service } from '../../components'
import { service01, service02, service03, service04 } from './imports'

const Services = () => {
  return (
    <div
      className="gardenia__services section__padding section__margin"
      id="services"
    >
      <div className="gardenia__services-heading">
        <h1>Our Services</h1>
      </div>
      <div className="gardenia__services-cards grid grid--4-cols">
        <div className="gardenia__services-card">
          <Service
            imgUrl={service01}
            title="Consultation"
            text="Work with you to create a customized garden."
          />
        </div>
        <div className="gardenia__services-card">
          <Service
            imgUrl={service02}
            title="Plants Sale"
            text="A wide selection of high quality plants, seeds, bulbs."
          />
        </div>
        <div className="gardenia__services-card">
          <Service
            imgUrl={service03}
            title="Landscaping"
            text="Transform outdoor space into a beautiful oasis."
          />
        </div>
        <div className="gardenia__services-card">
          <Service
            imgUrl={service04}
            title="Workshops"
            text="Help you learn new skills and gain the knowledge."
          />
        </div>
      </div>
    </div>
  )
}

export default Services
