import Hero from "../Components/Hero/Hero";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../Components/Testimonials/Testimonials";
import Team from "../Components/Team/Team";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Hero heading="About Us" />
      <WhyChooseUs />
      <Team />
      <Testimonials />
    </motion.div>
  );
};

export default About;
