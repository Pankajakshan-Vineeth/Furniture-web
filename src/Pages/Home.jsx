import Hero from '../Components/Hero/Hero'
import Products from '../Components/Products/Products'
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs'
import InteriorDesignSection from '../Components/InteriorDesignSection/InteriorDesignSection'
import Testimonials from '../Components/Testimonials/Testimonials'
import RecentBlog from '../Components/RecentBlog/RecentBlog'

const Home = () => {
  return (
    <div>
      <Hero  heading="Modern Interior Design Studio"/>
      <Products/>
      <WhyChooseUs/>
      <InteriorDesignSection/>
      <Testimonials/>
      <RecentBlog/>
    </div>
  )
}

export default Home
