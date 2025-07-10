import React from 'react'
import Hero from '../Components/Hero/Hero'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import Testimonials from '../Components/Testimonials/Testimonials'

const About = () => {
  return (
    <div>
      <Hero  heading="About Us"/>
      <WhyChooseUs/>
      <Testimonials/>
    </div>
  )
}

export default About
