import "./Hero.css";
import userIcon from "../../assets/user.svg";
import CartIcon from "../../assets/cart.svg";
import Couch from "../../assets/couch.png";
import greenDots from '../../assets/dots-green.svg'

const Hero = () => {
  return (
    <div className="hero-container">
      {/* navbar */}

      <div className="nav-container">
        <div className="logo">
          <h1>Furni.</h1>
        </div>
        <div className="menu">
          <a href="#" className="active">
            <span></span>Home
          </a>
          <a href="#">
            <span></span>Shop
          </a>
          <a href="#">
            <span></span>About Us
          </a>
          <a href="#">
            <span></span>Services
          </a>
          <a href="#">
            <span></span>Blog
          </a>
          <a href="#">
            <span></span>Contact us
          </a>
        </div>
        <div className="icons">
          <img src={userIcon} alt="" className="icon1" />
          <img src={CartIcon} alt="" />
        </div>
      </div>

      {/* hero section */}

      <div className="main-container">
        <div className="text-container">
          <h1>Modern Interior Design Studio</h1>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique
          </p>
          <button>Shop Now</button>
          <button>Explore</button>
        </div>
        <div className="image-container">
      <img src={Couch} alt="" className="sofa-image" />
      <img src={greenDots} alt="" className="green-dots" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
