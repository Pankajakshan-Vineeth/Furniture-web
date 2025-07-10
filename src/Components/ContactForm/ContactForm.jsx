import "./ContactForm.css";
import gps from "../../assets/gps.png";
import phonecall from "../../assets/phone-call.png";
import email from "../../assets/email.png";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <div className="contact-box">
          <img src={gps} alt="" className="contact-icon" />
          <p>
            43 Raymouth Rd. Baltemoer,
            <br />
            London 3910
          </p>
        </div>
        <div className="contact-box">
          <img src={phonecall} alt="" className="contact-icon" />
          <p>info@yourdomain.com</p>
        </div>
        <div className="contact-box">
          <img src={email} alt="" className="contact-icon" />
          <p>+1 294 3925 3939</p>
        </div>
      </div>

      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>First name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea rows="5"></textarea>
        </div>
        <button
          type="submit"
          className="submit-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
