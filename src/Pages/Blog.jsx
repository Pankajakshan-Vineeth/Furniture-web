import BlogCards from "../Components/BlogCards/BlogCards";
import Hero from "../Components/Hero/Hero";
import Testimonials from "../Components/Testimonials/Testimonials";

const Blog = () => {
  return (
    <div>
      <Hero heading="Blog" />
      <BlogCards/>
      <Testimonials />
    </div>
  );
};

export default Blog;
