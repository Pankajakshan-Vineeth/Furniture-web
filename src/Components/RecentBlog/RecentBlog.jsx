import "./RecentBlog.css";
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
];

export default function RecentBlog() {
  return (
    <section className="recent-blog">
      <div className="recent-blog-header">
        <h2>Recent Blog</h2>
        <a href="#" className="view-all">
          View All Posts
        </a>
      </div>
      <div className="blog-cards">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            
              <img
                src={post.image}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="blog-image"
              />
        
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-meta">
              by <span className="author">{post.author}</span> on{" "}
              <span className="date">{post.date}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
