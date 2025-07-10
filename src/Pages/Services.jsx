import React from 'react'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products'
import Testimonials from '../Components/Testimonials/Testimonials'
import Support from '../Components/Support/Support'


const Services = () => {
  return (
    <div>
      <Hero  heading="Services"/>
      <Support/>
      <Products/>
      <Testimonials/>
    </div>
  )
}

export default Services
