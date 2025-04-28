// ProductsPage.tsx
import {
  container,
  thumbnail,
  productGrid,
  thumbnailContainer,
  companyBar,
  productContainer,
  pageContainer,
  pageButton,
  // productPlusButton,
} from "./index.style.css";
import useCategoryDetailHook from "./hooks/useCategoryDetailHook";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import ProductContainer from "./components/Product";
import CompanyContainer from "./components/Company";

function CategoryDetailPage({ isLoggedIn }: { isLoggedIn: boolean }) {
  const { categoryPath } = useParams();
  const {
    categoryThumbnail,
    companys,
    products,
    removeProduct,
    modifyThumbnail,
    addCompanyModalOn,
    // addProduct,
  } = useCategoryDetailHook(categoryPath ? categoryPath : "0");

  return (
    <div className={container}>
      <div className={thumbnailContainer}>
        <img
          className={thumbnail}
          src={categoryThumbnail}
          alt="categoryThumbnail"
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
        {companys?.map((company) => (
          <CompanyContainer
            key={company.companyId}
            companyId={company.companyId}
            companyName={company.companyName}
            isLoggedIn={isLoggedIn}
          />
        ))}
        {isLoggedIn && <button onClick={addCompanyModalOn}>+</button>}
      </div>

      <div className={productContainer}>
        <div className={productGrid}>
          {products?.map((product) => (
            <ProductContainer
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              onRemove={removeProduct}
              isLoggedIn={isLoggedIn}
            />
          ))}
          {/* {isLoggedIn && (
            <button className={productPlusButton} onClick={() => addProduct()}>
              +
            </button>
          )} */}
        </div>
      </div>

      <div className={pageContainer}>
        <button className={pageButton}>1</button>
        <button className={pageButton}>2</button>
        <button className={pageButton}>3</button>
        <button className={pageButton}>4</button>
        <button className={pageButton}>5</button>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryDetailPage;
