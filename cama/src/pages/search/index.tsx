import { useNavigate } from "react-router-dom";
import useSearchHook from "./hooks/useSearchHook";
import ProductContainer from "../category-detail/components/Product";
import Footer from "../../components/Footer";
import {
  container,
  contentArea,
  titleContainer,
  resultCount,
  productContainer,
  productGrid,
  emptyState,
  loadingState,
} from "./index.style.css";
import plusIcon from "../../assets/svg/plus.svg";

const DEFAULT_PRODUCT_IMAGE = plusIcon;

function SearchPage() {
  const navigate = useNavigate();
  const { products, totalCount, keyword, isLoading } = useSearchHook();

  return (
    <>
      <div className={container}>
        <div className={contentArea}>
          <div className={titleContainer}>
            Search: &quot;{keyword}&quot;
          </div>

          {!isLoading && keyword && (
            <div className={resultCount}>{totalCount}개의 결과</div>
          )}

          {isLoading ? (
            <div className={loadingState}>검색 중...</div>
          ) : products.length > 0 ? (
            <div className={productContainer}>
              <div className={productGrid}>
                {products.map((product) => (
                  <ProductContainer
                    key={product.productsId}
                    productsId={product.productsId}
                    productsName={product.productsName}
                    productsImage={product.productsImage || DEFAULT_PRODUCT_IMAGE}
                    isLoggedIn={false}
                    onClick={() => navigate(`/products/${product.productsId}`)}
                  />
                ))}
              </div>
            </div>
          ) : (
            keyword && (
              <div className={emptyState}>
                <p>&quot;{keyword}&quot;에 대한 검색 결과가 없습니다.</p>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;
