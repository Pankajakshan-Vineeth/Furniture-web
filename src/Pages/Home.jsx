import React from 'react'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import InteriorDesignSection from '../Components/InteriorDesignSection/InteriorDesignSection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Products/>
      <WhyChooseUs/>
      <InteriorDesignSection/>
    </div>
  )
}

export default Home
