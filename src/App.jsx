import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from './Pages/About'; // 
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact"; 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
