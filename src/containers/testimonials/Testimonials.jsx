import React from 'react'
import './testimonials.css'
import { Testimonial } from '../../components'
import { customer01, customer02, customer03 } from './imports'

const testimonials = () => {
  return (
    <div
      className="gardenia__testimonials section__padding"
      id="testimonials"
    >
      <div className="gardenia__testimonials-heading">
        <h1>
          Hear What Our Customers Are Saying About Their Experience with
          Gardenia
        </h1>
      </div>
      <div className="gardenia__testimonials-cards grid grid--3-cols">
        <Testimonial
          text="Working with gardenia has been an absolute pleasure! They helped me design and create a beautiful garden that has exceeded my expectations. I highly recommend Gardenia to anyone looking for a great garden center!"
          imgUrl={customer01}
          name="Sarah L."
        />
        <Testimonial
          text="Thanks to Gardenia, I was able to transform my boring backyard into a beautiful oasis. The staff was incredibly helpful and patient, taking the time to answer all of my questions and make recommendations. The plants I purchased were of the highest quality and have been thriving ever since. I highly recommend Gardenia to anyone looking to create a stunning garden!"
          imgUrl={customer02}
          name="James M."
        />
        <Testimonial
          text="I've been a customer of Gardenia for years and I am always impressed by their extensive selection of plants and gardening supplies. I recently attended one of their workshops and found it to be both informative and engaging."
          imgUrl={customer03}
          name="Jenny K."
        />
      </div>
    </div>
  )
}

export default testimonials
