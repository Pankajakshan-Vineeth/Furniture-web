import BlogCards from "../Components/BlogCards/BlogCards";
import Hero from "../Components/Hero/Hero";
import Testimonials from "../Components/Testimonials/Testimonials";
import { motion } from "framer-motion";


const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Hero heading="Blog" />
      <BlogCards />
      <Testimonials />
    </motion.div>
  );
};

export default Blog;
