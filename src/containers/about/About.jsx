import React from 'react'
import './about.css'
import about from '../../assets/about.jpg'

const About = () => {
  return (
    <div
      className="gardenia__about section__padding section__margin"
      id="about"
    >
      <div className="gardenia__about-content">
        <h1>About Gardenia</h1>
        <p>
          Our commitment to quality is evident in everything we do, from the
          carefully curated selection of plants and products in our store to the
          expert advice and guidance we offer to our customers. <br />
          <br />
          We believe that a thriving community begins with a healthy and vibrant
          environment, and we’re honored to play a role in creating and
          maintaining the natural beauty of our area.
        </p>
      </div>
      <div className="gardenia__about-img">
        <img
          src={about}
          alt="about img"
        />
      </div>
    </div>
  )
}

export default About
