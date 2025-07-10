import { motion } from "framer-motion";
import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import InteriorDesignSection from "../Components/InteriorDesignSection/InteriorDesignSection";
import Testimonials from "../Components/Testimonials/Testimonials";
import RecentBlog from "../Components/RecentBlog/RecentBlog";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Hero heading="Modern Interior Design Studio" />
      <Products />
      <WhyChooseUs />
      <InteriorDesignSection />
      <Testimonials />
      <RecentBlog />
    </motion.div>
  );
};

export default Home;
