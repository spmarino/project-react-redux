import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const {id, title} = products[0];
  return (
    <>
    <h3>{id}</h3>
      <h2>{title}</h2>
    </>
  );
};

export default ProductComponent;
