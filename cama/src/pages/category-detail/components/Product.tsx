// Product.tsx
import React, { useState } from "react";
import {
  productItem,
  overlay,
  showOverlay,
  deleteBtn,
  productNameContainer,
} from "./Product.style.css";
import { Products } from "../../../apis/products/type";

interface ProductProps extends Products {
  onRemove?: (productId: string) => void;
  onClick: () => void;
  isLoggedIn: boolean;
}

const ProductContainer: React.FC<ProductProps> = ({
  productsId,
  productsImage,
  productsName,
  onRemove,
  onClick,
  isLoggedIn,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={productItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img src={productsImage} alt={productsName} />
      <div className={`${overlay} ${hovered ? showOverlay : ""}`}>
        <div className={productNameContainer}>{productsName}</div>
        {isLoggedIn && onRemove && (
          <button
            className={deleteBtn}
            onClick={() => onRemove && onRemove(productsId)}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductContainer;
