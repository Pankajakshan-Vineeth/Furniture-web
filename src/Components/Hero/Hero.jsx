import "./Hero.css";
import Couch from "../../assets/couch.png";
import greenDots from "../../assets/dots-green.svg";

const Hero = ({ heading }) => {
  return (
    <div className="hero-container">
      {/* hero section */}

      <div className="main-container">
        <div className="text-container">
          <h1>{heading}</h1>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique
          </p>
          <button>Shop Now</button>
          <button>Explore</button>
        </div>
        <div className="image-container-sofa">
          <img src={Couch} alt="" className="sofa-image-green" />
          <img src={greenDots} alt="" className="green-dots" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
