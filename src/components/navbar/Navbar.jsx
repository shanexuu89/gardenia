import React, { useState, useEffect } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#events">Events</a>
    </p>
    <p>
      <a href="#services">Services</a>
    </p>
    <p>
      <a href="#testimonials">Testimonials</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    function stickyNavbar() {
      if (window.scrollY > 400) setIsSticky(true)
      else setIsSticky(false)
    }

    window.addEventListener('scroll', stickyNavbar)

    return () => {
      window.removeEventListener('scroll', stickyNavbar)
    }
  }, [])

  return (
    <div
      className={isSticky ? 'gardenia__navbar sticky' : 'gardenia__navbar'}
      id="gardenia__navbar"
    >
      <div className="gardenia__navbar-links_logo">
        <a href="#">
          <img
            src={logo}
            alt="logo"
          />
        </a>
      </div>
      <div className="gardenia__navbar-links">
        <div className="gardenia__navbar-links_container">
          <Menu />
          <div className="gardenia__navbar-links_container-sign">
            <a href="#cta">
              <button type="button">Join the community</button>
            </a>
          </div>
        </div>
      </div>

      <div className="gardenia__navbar-mobile">
        {toggleMenu ? (
          <RiCloseLine
            color="#222931"
            size={27}
            className="gardenia__navbar-mobile_icon"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#222931"
            size={27}
            className="gardenia__navbar-mobile_icon"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className="gardenia__navbar-links_mobile slide-bottom"
            onClick={() => setToggleMenu(false)}
          >
            <Menu />
            <div className="gardenia__navbar-links_mobile-sign">
              <a href="#cta">
                <button type="button">Join the community</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
