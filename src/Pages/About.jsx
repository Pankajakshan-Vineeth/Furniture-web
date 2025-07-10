import React from 'react'
import Hero from '../Components/Hero/Hero'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import Testimonials from '../Components/Testimonials/Testimonials'
import Team from '../Components/Team/Team'

const About = () => {
  return (
    <div>
      <Hero  heading="About Us"/>
      <WhyChooseUs/>
      <Team/>
      <Testimonials/>
    </div>
  )
}

export default About
