import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Products from "./Products";

function Home() {
  return (
    <div>
      <Nav />
      <h1 className="heading">Products</h1>
      <Products />
      <Footer />   
    </div> 
  );
}

export default Home;
