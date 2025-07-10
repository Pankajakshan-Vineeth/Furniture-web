import Hero from '../Components/Hero/Hero';
import Products from '../Components/Products/Products';
import Testimonials from '../Components/Testimonials/Testimonials';
import Support from '../Components/Support/Support';
import ScrollReveal from '../Components/ScrollReveal ';
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <ScrollReveal>
        <Hero heading="Services" />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Support />
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <Products />
      </ScrollReveal>

      <ScrollReveal delay={0.6}>
        <Testimonials />
      </ScrollReveal>
    </motion.div>
  );
};

export default Services;
