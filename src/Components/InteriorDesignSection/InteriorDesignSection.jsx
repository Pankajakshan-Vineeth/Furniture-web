import "./InteriorDesignSection.css";
import imageone from "../../assets/img-grid-1.jpg";
import imagetwo from "../../assets/img-grid-2.jpg";
import imagethree from "../../assets/img-grid-3.jpg";
import Product1 from "../../assets/product-1.png";
import Product2 from "../../assets/product-2.png";
import Product3 from "../../assets/product-3.png";

import { motion } from "framer-motion";

const InteriorDesignSection = () => {
  const features = [
    {
      title: "Nordic Chair",
      desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      img: Product1,
    },
    {
      title: "Kruzo Aero Chair",
      desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      img: Product2,
    },
    {
      title: "Ergonomic Chair",
      desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      img: Product3,
    },
  ];

  return (
    <div className="section-container">
      <div className="image-text-container">
        {/* Left Image Grid */}
        <motion.div
          className="image-grid"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="dot-pattern"></div>

          <div className="image image-large">
            <img src={imageone} alt="Sofa" />
          </div>

          <div className="image image-small top-right">
            <img src={imagetwo} alt="Interior" />
          </div>

          <div className="image image-small bottom-right">
            <img src={imagethree} alt="Stool" />
          </div>
        </motion.div>

        {/* Right Text Content */}
        <motion.div
          className="content"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2>We Help You Make Modern Interior Design</h2>
          <p>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique.
          </p>

          <ul className="features">
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
          </ul>

          <button
            className="explore-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Explore
          </button>
        </motion.div>
      </div>

      {/* Chair Product Section */}
      <div className="chair-section">
        {features.map((item, index) => (
          <motion.div
            className="chair-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="image-container">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="para">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#">Read More</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteriorDesignSection;
