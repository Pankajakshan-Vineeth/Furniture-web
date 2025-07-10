import { motion } from "framer-motion";
import ShopBanner from "../Components/ShopBanner/ShopBanner";
import ShopProducts from "../Components/ShopProducts/ShopProducts";
import ScrollReveal from "../Components/ScrollReveal ";

const Shop = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <ScrollReveal>
        <ShopBanner />
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <ShopProducts />
      </ScrollReveal>
    </motion.div>
  );
};

export default Shop;
