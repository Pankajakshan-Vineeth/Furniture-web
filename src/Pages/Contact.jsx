import Hero from "../Components/Hero/Hero";
import ContactForm from "../Components/ContactForm/ContactForm";
import ScrollReveal from "../Components/ScrollReveal ";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <ScrollReveal>
        <Hero heading="Contact" />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <ContactForm />
      </ScrollReveal>
    </motion.div>
  );
};

export default Contact;
