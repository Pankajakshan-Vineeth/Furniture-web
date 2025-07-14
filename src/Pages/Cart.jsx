import CartTotal from "../Components/CartTotal/CartFooter";
import ShopBanner from "../Components/ShopBanner/ShopBanner";
import { motion } from "framer-motion";

const Cart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <ShopBanner heading="Cart" />
      <CartTotal />
    </motion.div>
  );
};

export default Cart;
