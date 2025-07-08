import "./Hero.css";
import userIcon from "../../assets/user.svg";
import CartIcon from "../../assets/cart.svg";
import Couch from "../../assets/couch.png";
import greenDots from "../../assets/dots-green.svg";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* navbar */}

      <div className="nav-container">
        <div className="logo">
          <h1>Furni.</h1>
        </div>
        <div className="menu">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span></span>Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span></span>Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span></span>About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span></span>Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span></span>Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span></span>Contact Us
          </NavLink>
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
        <div className="image-container-sofa">
          <img src={Couch} alt="" className="sofa-image-green" />
          <img src={greenDots} alt="" className="green-dots" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
