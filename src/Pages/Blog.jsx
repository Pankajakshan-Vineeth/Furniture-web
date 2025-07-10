import BlogCards from "../Components/BlogCards/BlogCards";
import Hero from "../Components/Hero/Hero";
import Testimonials from "../Components/Testimonials/Testimonials";
import ScrollReveal from "../Components/ScrollReveal ";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <ScrollReveal>
        <Hero heading="Blog" />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <BlogCards />
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <Testimonials />
      </ScrollReveal>
    </motion.div>
  );
};

export default Blog;
