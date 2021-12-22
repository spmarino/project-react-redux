import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { id, title, price, category, image } = product;
  const { product_Id } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${product_Id}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (product_Id && product_Id !== "") fetchProductDetail();
    return() =>{
      dispatch(removeSelectedProduct());
    }
  }, [product_Id]);
  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div> ...Loading</div>
      ) : (
        <div key={id}>
          <h2>{title}</h2>
          <img src={image} alt={title} />
          <h3>Price{price}</h3>
          <h4>Category: {category}</h4>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
