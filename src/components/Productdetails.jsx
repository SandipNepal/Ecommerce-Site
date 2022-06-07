import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import products from "../productsData";
import Footer from "./Footer";
import Nav from "./Nav";
function ProductDetail() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("Form");
  }
  const { productId } = useParams();
  const thisProduct = products.find((prod) => prod.id === Number(productId));
  return (
    <div>
      <Nav />
      <div className="singleProduct">
        <h1>{thisProduct.productName}</h1>
        <img alt="product_name" src={thisProduct.imgUrl} />
        <p>Price: {thisProduct.productPrice}</p>
        <p> {thisProduct.description}</p>
        <button onClick={handleClick} className="pageButton">
          Buy Now!
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
