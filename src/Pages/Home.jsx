import { motion } from "framer-motion";
import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import InteriorDesignSection from "../Components/InteriorDesignSection/InteriorDesignSection";
import Testimonials from "../Components/Testimonials/Testimonials";
import RecentBlog from "../Components/RecentBlog/RecentBlog";
import ScrollReveal from "../Components/ScrollReveal ";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <ScrollReveal delay={0}>
        <Hero heading="Modern Interior Design Studio" />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Products />
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal delay={0.6}>
        <InteriorDesignSection />
      </ScrollReveal>

      <ScrollReveal delay={0.8}>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal delay={1.0}>
        <RecentBlog />
      </ScrollReveal>
    </motion.div>
  );
};

export default Home;
