import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import FloatingAssistant from "./Components/FloatingAssistant/FloatingAssistant";
import LoginSignup from "./Pages/LoginSignup";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path= "/Profile" element={<LoginSignup/>}/>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <AnimatedRoutes />
      <Footer />
      <FloatingAssistant />
    </BrowserRouter>
  );
};

export default App;
