import "./BlogCards.css";
import post1 from "../../assets/post-1.jpg";
import post2 from "../../assets/post-2.jpg";
import post3 from "../../assets/post-3.jpg";

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
          <div className="blog-card" key={index}>
            <img src={post.image} className="blog-image"   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
/>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-meta">
              by <span className="author">{post.author}</span> on{" "}
              <span className="date">{post.date}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
