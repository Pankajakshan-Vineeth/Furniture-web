import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/user.svg";
import CartIcon from "../../assets/cart.svg";
import "./Navigation.css";
import { useEffect } from "react";

const Navigation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav-container");
      if (window.scrollY > 50) {
        nav.classList.add("sticky-nav");
      } else {
        nav.classList.remove("sticky-nav");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nav-main-container">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <h1 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Furni.
            </h1>
          </Link>
        </div>
        <div className="menu">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span></span>Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span></span>Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span></span>About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span></span>Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span></span>Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span></span>Contact Us
          </NavLink>
        </div>
        <div className="icons">
          <img src={userIcon} alt="" className="icon1" />
          <Link to="/cart">
            <img
              src={CartIcon}
              alt="cart"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
