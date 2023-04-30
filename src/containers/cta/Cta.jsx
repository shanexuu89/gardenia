import React from 'react'
import './cta.css'
import cta from '../../assets/cta.jpg'

const Cta = () => {
  return (
    <div
      className="gardenia__cta section__padding section__margin"
      id="cta"
    >
      <div className="gardenia__cta-content">
        <h1>Join us for one of our upcoming workshops!</h1>
        <p>
          Our educational workshops are designed to help you gain the knowledge
          and skills you need to become a successful gardener.
        </p>
        <form className="gardenia__cta-content-form">
          <div>
            <label for="full-name">Full Name</label>
            <input
              id="full-name"
              type="text"
              placeholder="Mark Smith"
              name="full-name"
              required
            ></input>
          </div>
          <div>
            <label for="Email-address">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="me@example.com"
              name="email"
              required
            ></input>
          </div>
          <div>
            <label for="select-where">Where did you hear from us?</label>
            <select
              id="select-where"
              name="select-where"
              required
            >
              <option value>Please choose one option:</option>
              <option value="fridens">Friends and family</option>
              <option value="youtube">Yotube Video</option>
              <option value="podcast">Podcase</option>
              <option value="ad">Facebook ad</option>
              <option value="othres">Others</option>
            </select>
          </div>
          <div className="gardenia__cta-form-button">
            <button>Join the community</button>
          </div>
        </form>
      </div>
      <div className="gardenia__cta-image">
        <img
          src={cta}
          alt="cta image"
        />
      </div>
    </div>
  )
}

export default Cta
