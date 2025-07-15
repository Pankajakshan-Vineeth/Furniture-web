import "./Support.css";
import shipping from "../../assets/shopping-bag.png";
import customerSupport from "../../assets/customer-support.png";
import shop from "../../assets/delivery.png";
import ProductReturn from "../../assets/product-return.png";
import { motion } from "framer-motion";

const featuresData = [
  {
    icon: shipping,
    title: "Fast & Free Shipping",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: shop,
    title: "Easy to Shop",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: customerSupport,
    title: "24/7 Support",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: ProductReturn,
    title: "Hassle Free Returns",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
];

const Support = () => {
  return (
    <div className="support-container">
      {[1, 2].map((row, rowIndex) => (
        <div className="features-grid" key={rowIndex}>
          {featuresData.map((feature, index) => (
            <motion.div
              className="feature"
              key={`${rowIndex}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="icon-wrapper">
                <img src={feature.icon} className="icon" />
              </div>
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Support;
