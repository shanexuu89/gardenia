import React from 'react'
import {
  About,
  Events,
  Footer,
  Header,
  Services,
  Testimonials,
  Cta,
} from './containers'

import { Navbar } from './components'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Events />
      <Services />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
