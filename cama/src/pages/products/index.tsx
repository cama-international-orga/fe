// ProductsPage.tsx
import React from "react";
import {
  container,
  thumbnail,
  productGrid,
  thumbnailContainer,
  companyBar,
  productContainer,
  pageContainer,
  pageButton,
} from "./index.style.css";
import { useProductsManager } from "./hooks/useProductsManager";
import { Product, Company } from "./components";

function ProductsPage({ isLoggedIn = true }: { isLoggedIn: boolean }) {
  const {
    productsThumbnail,
    companys,
    products,
    removeProduct,
    addCompany,
    modifyThumbnail,
    // addProduct,
  } = useProductsManager("all");

  return (
    <div className={container}>
      <div className={thumbnailContainer}>
        <img
          className={thumbnail}
          src={productsThumbnail}
          alt="productsThumbnail"
        />
        {isLoggedIn && (
          <button
            onClick={() =>
              modifyThumbnail("all", "https://picsum.photos/200/300")
            }
          >
            수정
          </button>
        )}
      </div>
      <div className={companyBar}>
        {companys.map((company) => (
          <Company
            key={company}
            name={company}
            onModify={() => {
              console.log("링크 수정");
            }}
          />
        ))}
        {isLoggedIn && <button onClick={() => addCompany("추가")}>+</button>}
      </div>

      <div className={productContainer}>
        <div className={productGrid}>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              onRemove={removeProduct}
            />
          ))}
          {isLoggedIn && (
            <button
              onClick={() => {
                // addProduct();
              }}
            >
              +
            </button>
          )}
        </div>
      </div>

      {/* 새 도어 핸들 추가 폼 */}
      <div className={pageContainer}>
        <button className={pageButton}>1</button>
        <button className={pageButton}>2</button>
        <button className={pageButton}>3</button>
        <button className={pageButton}>4</button>
        <button className={pageButton}>5</button>
      </div>
    </div>
  );
}

export default ProductsPage;
