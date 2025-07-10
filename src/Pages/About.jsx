import Hero from "../Components/Hero/Hero";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../Components/Testimonials/Testimonials";
import Team from "../Components/Team/Team";
import ScrollReveal from "../Components/ScrollReveal ";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <ScrollReveal>
        <Hero heading="About Us" />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <Team />
      </ScrollReveal>

      <ScrollReveal delay={0.6}>
        <Testimonials />
      </ScrollReveal>
    </motion.div>
  );
};

export default About;
