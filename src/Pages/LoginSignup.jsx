import { motion } from "framer-motion";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <motion.div
      className="login-createaccount"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        className="login-container"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      >
        <h3>LOGIN</h3>
        <div className="login-fields">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Sign in</button>
        <span className="forgot">Forgot your password?</span>
      </motion.div>

      <motion.div
        className="signup-container"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
      >
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
      </motion.div>
    </motion.div>
  );
};

export default LoginSignup;
