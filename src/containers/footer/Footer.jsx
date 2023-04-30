import React from 'react'
import './footer.css'
import { logo, instagram, facebook, twitter } from './imports'

const footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="gardenia__footer section__padding">
      <div className="gardenia__footer-links">
        <div className="gardenia__footer-links_div">
          <div className="gardenia__footer-links_logo">
            <a href="#">
              <img
                src={logo}
                alt="logo"
              />
            </a>
          </div>
          <div className="gardenia__footer-links__groupA-socical">
            <img
              src={instagram}
              alt="instagram"
            />
            <img
              src={facebook}
              alt="facebook"
            />
            <img
              src={twitter}
              alt="twitter"
            />
          </div>
          <div className="gardenia__footer-links__groupA-copyright">
            <p>
              Copyright &copy; {currentYear} by Gardenia Inc. <br />
              All rights reserved.
            </p>
          </div>
        </div>
        <div className="gardenia__footer-links_div">
          <h3>Contact us</h3>
          <p>
            9220 Oasis Place, <br />
            Rotorua, Rotorua 1173
          </p>
          <p>(911) 8297-359</p>
          <a href="mailto:hello@gardenia.com">
            <p>hello@gardenia.com</p>
          </a>
        </div>

        <div className="gardenia__footer-links_div">
          <h3>Links</h3>
          <a href="#about">
            <p>About</p>
          </a>
          <a href="#events">
            <p>Events</p>
          </a>
          <a href="#services">
            <p>Services</p>
          </a>
          <a href="#testimonials">
            <p>Testimonials</p>
          </a>
        </div>
        <div className="gardenia__footer-links_div">
          <h3>Company</h3>
          <a href="#">
            <p>Terms & Conditions</p>
          </a>
          <a href="#">
            <p>Privacy Policy</p>
          </a>
          <a href="#">
            <p>Privacy Policy</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default footer
