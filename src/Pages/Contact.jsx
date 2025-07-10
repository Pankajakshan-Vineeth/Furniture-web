import Hero from "../Components/Hero/Hero";
import ContactForm from "../Components/ContactForm/ContactForm";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Hero heading="Contact" />
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
