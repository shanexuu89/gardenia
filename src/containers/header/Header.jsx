import React from 'react'
import './header.css'
import greenhouse from '../../assets/greenhouse.jpg'

const Header = () => {
  return (
    <div
      className="gardenia__header"
      id="home"
    >
      <div className="gardenia__header-image">
        <img src={greenhouse} />
      </div>
      <div className="gardenia__header-content">
        <h1>Discover Your Dream Garden at Gardenia.</h1>
        <p>
          We’re passionate about helping you create the garden of your dreams.
        </p>
        <a href="#cta">
          <button type="button">Get Started ▶</button>
        </a>
      </div>
    </div>
  )
}

export default Header
