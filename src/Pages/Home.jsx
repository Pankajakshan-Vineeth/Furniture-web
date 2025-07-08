import React from 'react'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import InteriorDesignSection from '../Components/InteriorDesignSection/InteriorDesignSection'
import Testimonials from '../Components/Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Products/>
      <WhyChooseUs/>
      <InteriorDesignSection/>
      <Testimonials/>
    </div>
  )
}

export default Home
