import React from 'react'
import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import InteriorDesignSection from '../Components/InteriorDesignSection/InteriorDesignSection'
import Testimonials from '../Components/Testimonials/Testimonials'
import RecentBlog from '../Components/RecentBlog/RecentBlog'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Products/>
      <WhyChooseUs/>
      <InteriorDesignSection/>
      <Testimonials/>
      <RecentBlog/>
      <Footer/>
    </div>
  )
}

export default Home
