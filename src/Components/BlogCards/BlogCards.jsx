import "./BlogCards.css";
import post1 from "../../assets/post-1.jpg";
import post2 from "../../assets/post-2.jpg";
import post3 from "../../assets/post-3.jpg";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "First Time Home Owner Ideas",
    author: "Kristin Watson",
    date: "Dec 19, 2021",
    image: post1,
  },
  {
    title: "How To Keep Your Furniture Clean",
    author: "Robert Fox",
    date: "Dec 15, 2021",
    image: post2,
  },
  {
    title: "Small Space Furniture Apartment Ideas",
    author: "Kristin Watson",
    date: "Dec 12, 2021",
    image: post3,
  },
  {
    title: "First Time Home Owner Ideas",
    author: "Kristin Watson",
    date: "Dec 19, 2021",
    image: post1,
  },
  {
    title: "How To Keep Your Furniture Clean",
    author: "Robert Fox",
    date: "Dec 15, 2021",
    image: post2,
  },
  {
    title: "Small Space Furniture Apartment Ideas",
    author: "Kristin Watson",
    date: "Dec 12, 2021",
    image: post3,
  },
  {
    title: "First Time Home Owner Ideas",
    author: "Kristin Watson",
    date: "Dec 19, 2021",
    image: post1,
  },
  {
    title: "How To Keep Your Furniture Clean",
    author: "Robert Fox",
    date: "Dec 15, 2021",
    image: post2,
  },
  {
    title: "Small Space Furniture Apartment Ideas",
    author: "Kristin Watson",
    date: "Dec 12, 2021",
    image: post3,
  },
];

const BlogCards = () => {
  return (
    <div className="blog-container">
      <div className="blog-cards">
        {blogPosts.map((post, index) => (
          <motion.div
            className="blog-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={post.image}
              className="blog-image"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              alt={post.title}
            />
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-meta">
              by <span className="author">{post.author}</span> on{" "}
              <span className="date">{post.date}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
