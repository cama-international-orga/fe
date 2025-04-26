// Product.tsx
import React from "react";
import { productItem } from "./Product.style.css";
import { ProductProps } from "../../../apis/products/type";

const Product: React.FC<ProductProps> = ({ id, image, name, onRemove, isLoggedIn }) => {
  return (
    <div className={productItem}>
      <img src={image} alt={name} />
      <p>{id}</p>
      {isLoggedIn && <button onClick={() => onRemove(id)}>X</button>}
    </div>
  );
};

export default Product;
