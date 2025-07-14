import "./CSS/LoginSignup.css";
import { motion } from "framer-motion";

const LoginSignup = () => {
  return (
    <motion.div
      className="login-createaccount"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="login-container">
        <h3>LOGIN</h3>

        <div className="login-fields">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

        <button>Sign in</button>
        <span className="forgot">Forgot your password?</span>
      </div>

      <div className="signup-container">
        <h3>CREATE ACCOUNT</h3>
        <div className="signup-fields">
          <input type="text" placeholder="First name" />
          <span>
            <input type="text" placeholder="Last name" />
          </span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

        <div className="signup-actions">
          <button>Create</button>
          <span>
            or <a href="/">Return to Store</a>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginSignup;
