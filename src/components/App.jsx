import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Contact from "./Contact";
import About from "./About";
import ProductDetail from "./Productdetails";
import Products from "./Products";
import Form from "./Form";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Products" element={<Products />} />
          <Route path="/Products/:productId" element={<ProductDetail />} />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/About" element={<About />} />
          <Route path="/Products/:productId/Form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
