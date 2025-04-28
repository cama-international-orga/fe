// Product.tsx
import React from "react";
import { productItem } from "./Product.style.css";
import { Product } from "../../../apis/products/type";

interface ProductProps extends Product {
  onRemove: (id: string) => void;
  isLoggedIn: boolean;
}

const ProductContainer: React.FC<ProductProps> = ({
  id,
  image,
  name,
  onRemove,
  isLoggedIn,
}) => {
  return (
    <div className={productItem}>
      <img src={image} alt={name} />
      <p>{id}</p>
      {isLoggedIn && <button onClick={() => onRemove(id)}>X</button>}
    </div>
  );
};

export default ProductContainer;
