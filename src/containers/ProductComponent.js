import React from "react";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, price, category, image} = product;
    return (
      
      <div key={id}>
       <Link to={`/product/${id}`}> <h3>Name : {title}</h3></Link>
        <h4>price: {price}</h4> 
        <h4>category: {category}</h4>
        <img height="50px" width="50px" src={image} alt={title}/>   
      </div>
    );
  });

  return (<>{renderList}</>);
};

export default ProductComponent;
