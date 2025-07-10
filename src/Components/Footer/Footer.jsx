import "./Footer.css";
import chair from "../../assets/sofa.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import telegram from "../../assets/telegram.png";
import email from "../../assets/email.png";

export default function Footer() {
  return (
    <footer className="footer-section">
      <img src={chair} alt="Chair" className="footer-chair" />

      <div className="footer-container">
        <div className="footer-top">
          <div className="newsletter">
            <p className="newsletter-title">
              <img src={email} className="email-icon" /> Subscribe to Newsletter
            </p>
            <div className="newsletter-inputs">
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
              <button type="submit" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
                <img src={telegram} className="telegram" />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-column company-info">
            <h3 className="brand">Furni.</h3>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank">
                <img src={facebook} alt="" className="icon1" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <img src={linkedin} alt="" className="icon1" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={instagram} alt="" className="icon1" />
              </a>
              <a href="https://x.com/?lang=en" target="_blank">
                <img src={twitter} alt="" className="icon1" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <p>About us</p>
              <p>Services</p>
              <p>Blog</p>
              <p>Contact us</p>
            </div>
            <div>
              <p>Support</p>
              <p>Knowledge base</p>
              <p>Live chat</p>
            </div>
            <div>
              <p>Jobs</p>
              <p>Our team</p>
              <p>Leadership</p>
              <p>Privacy Policy</p>
            </div>
            <div>
              <p>Nordic Chair</p>
              <p>Kruzo Aero</p>
              <p>Ergonomic Chair</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright ©2025. All Rights Reserved. — Designed with love by
            Untree.co <br />
            Distributed By ThemeWagon
          </p>
          <div className="bottom-links">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
