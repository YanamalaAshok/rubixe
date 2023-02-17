import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Services from "./components/Services";
import Products from "./components/Products";
import Header from "./components/Header";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
