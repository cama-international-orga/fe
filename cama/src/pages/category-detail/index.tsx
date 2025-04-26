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
import { useCategoryDetaiHook } from "./hooks/useCategoryDetaiHook";
import { Product, Company } from "./components";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

function CategoryDetailPage({ isLoggedIn }: { isLoggedIn: boolean }) {
  const { categoryId } = useParams();
  const {
    categoryThumbnail,
    companys,
    products,
    removeProduct,
    modifyThumbnail,
    addCompany,
    // addProduct,
  } = useCategoryDetaiHook(categoryId ? categoryId : "0");

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
          <Company
            key={company.companyId}
            companyId={company.companyId}
            companyName={company.companyName}
          />
        ))}
        {isLoggedIn && <button onClick={addCompany}>+</button>}
      </div>

      <div className={productContainer}>
        <div className={productGrid}>
          {products?.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              onRemove={removeProduct}
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
