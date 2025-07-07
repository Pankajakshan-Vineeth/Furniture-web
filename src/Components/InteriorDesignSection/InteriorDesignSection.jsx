import "./InteriorDesignSection.css";
import imageone from "../../assets/img-grid-1.jpg";
import imagetwo from "../../assets/img-grid-2.jpg";
import imagethree from "../../assets/img-grid-3.jpg";
import Product1 from "../../assets/product-1.png";
import Product2 from "../../assets/product-2.png";
import Product3 from "../../assets/product-3.png";

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
        {/* Left Side with Images */}

        <div className="image-grid">
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
        </div>

        {/* Right Side with Content */}

        <div className="content">
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

          <button className="explore-btn">Explore</button>
        </div>
      </div>

      {/* Products section */}

      <div className="chair-section">
        {features.map((item, index) => (
          <div className="chair-card" key={index}>
            <div className="image-container">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="para">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteriorDesignSection;
