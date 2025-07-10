import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/user.svg";
import CartIcon from "../../assets/cart.svg";
import './Navigation.css'

const Navigation = () => {

  return (
    <div className="nav-main-container">
      <div className="nav-container">
        <div className="logo">
         <Link to='/'><h1>Furni.</h1></Link>
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
          <Link to='/cart'><img src={CartIcon} alt="cart" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
