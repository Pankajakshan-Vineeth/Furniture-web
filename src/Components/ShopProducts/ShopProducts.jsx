import "./ShopProducts.css";
import product1 from "../../assets/Product-1.png";
import product2 from "../../assets/product-2.png";
import product3 from "../../assets/product-3.png";
import { motion } from "framer-motion";

const products = [
  {
    name: "Nordic Chair",
    price: "$50.00",
    image: product1,
  },
  {
    name: "Kruzo Aero Chair",
    price: "$78.00",
    image: product2,
  },
  {
    name: "Ergonomic Chair",
    price: "$43.00",
    image: product3,
  },
  {
    name: "Nordic Chair",
    price: "$50.00",
    image: product1,
  },
  {
    name: "Nordic Chair",
    price: "$50.00",
    image: product1,
  },
  {
    name: "Kruzo Aero Chair",
    price: "$78.00",
    image: product2,
  },
  {
    name: "Ergonomic Chair",
    price: "$43.00",
    image: product3,
  },
  {
    name: "Nordic Chair",
    price: "$50.00",
    image: product1,
  },
  {
    name: "Nordic Chair",
    price: "$50.00",
    image: product1,
  },
  {
    name: "Kruzo Aero Chair",
    price: "$78.00",
    image: product2,
  },
  {
    name: "Ergonomic Chair",
    price: "$43.00",
    image: product3,
  },
  {
    name: "Nordic Chair",
    price: "$50.00",
    image: product1,
  },
];

const ShopProducts = () => {
  return (
    <section className="products-section">
      <div className="crafted-products">
        {products.map((product, index) => (
          <motion.div
            className="product"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="product-hover-box">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>

              <div className="hover-box">
                <div className="plus-icon">+</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShopProducts;
