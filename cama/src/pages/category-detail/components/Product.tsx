// Product.tsx
import React, { useState } from "react";
import {
  productItem,
  overlay,
  showOverlay,
  deleteBtn,
  editBtn,
  productNameContainer,
} from "./Product.style.css";
import { Products } from "../../../apis/products/type";
import Edit from "../../../assets/svg/edit.svg?react";

interface ProductProps extends Products {
  onRemove?: (productId: string) => void;
  onEdit?: (productId: string) => void;
  onClick: () => void;
  isLoggedIn: boolean;
}

const ProductContainer: React.FC<ProductProps> = ({
  productsId,
  productsImage,
  productsName,
  onRemove,
  onEdit,
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
        {isLoggedIn && (
          <div>
            {onEdit && (
              <Edit
                className={editBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(productsId);
                }}
                width={24}
                height={24}
                fill="white"
              />
            )}
            {onRemove && (
              <button
                className={deleteBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(productsId);
                }}
              >
                X
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductContainer;
