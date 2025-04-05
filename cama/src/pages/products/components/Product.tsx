// Product.tsx
import React from "react";
import { productItem } from "./Product.style.css";

interface ProductProps {
  id: string;
  image: string;
  name: string;
  onRemove: (id: string) => void;
}

const Product: React.FC<ProductProps> = ({ id, image, name, onRemove }) => {
  return (
    <div className={productItem}>
      <img src={image} alt={name} />
      <p>{id}</p>
      <button onClick={() => onRemove(id)}>X</button>
    </div>
  );
};

export default Product;
