import ShopBanner from "../Components/ShopBanner/ShopBanner";
import ShopProducts from "../Components/ShopProducts/ShopProducts";
import { motion } from "framer-motion";

const Shop = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <ShopBanner />
      <ShopProducts />
    </motion.div>
  );
};

export default Shop;
