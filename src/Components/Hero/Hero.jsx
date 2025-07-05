import "./Hero.css";
import userIcon from "../../assets/user.svg";
import CartIcon from "../../assets/cart.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="nav-container">
        <div className="logo">
          <h1>Furni.</h1>
        </div>
        <div className="menu">
          <a href="#" className="active"><span></span>Home</a>
          <a href="#"><span></span>Shop</a>
          <a href="#"><span></span>About Us</a>
          <a href="#"><span></span>Services</a>
          <a href="#"><span></span>Blog</a>
          <a href="#"><span></span>Contact us</a>
        </div>
        <div className="icons">
          <img src={userIcon} alt="" className="icon1"/>
          <img src={CartIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
