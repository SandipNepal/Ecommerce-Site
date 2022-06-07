import React from "react";
import Card from "./Card";
import products from "../productsData";

function createCard(product) {
  return (
    <Card
      key={product.id}
      list={product.list}
      img={product.imgUrl}
      name={product.productName}
      price={product.productPrice}
      alt={product.alt}
      description={product.description}
    />
  );
}
function Products() {
  return <div className="products">{products.map(createCard)}</div>;
}

export default Products;
