import "./WhyChooseUs.css";
import dotsImage from "../../assets/dots-yellow.svg";
import whyChooseUs from "../../assets/why-choose-us-img.jpg";
import shipping from "../../assets/shopping-bag.png";
import customerSupport from "../../assets/customer-support.png";
import shop from "../../assets/delivery.png";
import ProductReturn from "../../assets/product-return.png";

import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-content">
        {/* LEFT: Text Section */}
        <motion.div
          className="text-section"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Why Choose Us</h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>

          <div className="features-grid">
            {/* Feature 1 */}
            <motion.div
              className="feature"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon-wrapper">
                <img src={shipping} className="icon" />
              </div>
              <div>
                <h4>Fast & Free Shipping</h4>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="feature"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon-wrapper">
                <img src={shop} className="icon" />
              </div>
              <div>
                <h4>Easy to Shop</h4>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="feature"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="icon-wrapper">
                <img src={customerSupport} className="icon" />
              </div>
              <div>
                <h4>24/7 Support</h4>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="feature"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="icon-wrapper">
                <img src={ProductReturn} className="icon" />
              </div>
              <div>
                <h4>Hassle Free Returns</h4>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT: Image Section */}
        <motion.div
          className="image-section"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={dotsImage} alt="Dots Background" className="dots-img" />
          <img src={whyChooseUs} alt="Room" className="main-img" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
