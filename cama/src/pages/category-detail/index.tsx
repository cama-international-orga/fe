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
  thumbnailModifyButton,
  // productPlusButton,
} from "./index.style.css";
import useCategoryDetailHook from "./hooks/useCategoryDetailHook";
import { useParams, useNavigate } from "react-router-dom";
import ProductContainer from "./components/Product";
import CompanyContainer from "./components/Company";
import defaultImg from "../../assets/svg/default-img.svg";
import { useModal } from "../../contexts";
import AddProductModal from "./components/AddProductModal";
// 썸네일 예비 이미지
const DEFAULT_THUMBNAIL = defaultImg;

// 상품 예비 이미지
const DEFAULT_PRODUCT_IMAGE = defaultImg;

function CategoryDetailPage({ isLoggedIn }: { isLoggedIn: boolean }) {
  const { categoryPath, companyId } = useParams();
  const navigate = useNavigate();
  const {
    categoryThumbnail,
    companys,
    products,
    removeProductModalOn,
    modifyThumbnail,
    addCompanyModalOn,
    // addProduct,
  } = useCategoryDetailHook(
    categoryPath ? categoryPath : "0",
    companyId ? companyId : "0"
  );

  const { openModal } = useModal();

  return (
    <div className={container}>
      <div className={thumbnailContainer}>
        <img
          className={thumbnail}
          src={categoryThumbnail || DEFAULT_THUMBNAIL}
          alt="categoryThumbnail"
        />
        {isLoggedIn && (
          <button
            className={thumbnailModifyButton}
            onClick={() =>
              modifyThumbnail("all", "https://picsum.photos/200/300")
            }
          >
            {categoryThumbnail ? "수정" : "이미지 추가"}
          </button>
        )}
      </div>
      <div className={companyBar}>
        <CompanyContainer
          key={"all-key"}
          categoryPath={categoryPath ? categoryPath : "0"}
          companyId={"0"}
          companyName={"ALL"}
          isLoggedIn={isLoggedIn}
          isAll={true}
        />
        {companys?.map((company) => (
          <CompanyContainer
            key={company.companyId}
            categoryPath={categoryPath ? categoryPath : "0"}
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
              key={product.productsId}
              productsId={product.productsId}
              productsImage={product.productsImage || DEFAULT_PRODUCT_IMAGE}
              productsName={product.productsName}
              onRemove={removeProductModalOn}
              onClick={() => {
                navigate(`/products/${product.productsId}`);
              }}
              isLoggedIn={isLoggedIn}
            />
          ))}
          <div style={{ textAlign: "center", width: "100%" }}>
            <img
              src={DEFAULT_PRODUCT_IMAGE}
              alt="예비 상품"
              style={{ width: 120, opacity: 0.5 }}
            />
            <div>등록된 상품이 없습니다.</div>
            {isLoggedIn && (
              <button
                onClick={() =>
                  openModal({
                    component: AddProductModal,
                    props: {
                      categoryPath: categoryPath ? categoryPath : "0",
                      companies: companys,
                    },
                  })
                }
              >
                상품 추가
              </button>
            )}
          </div>
        </div>
      </div>

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

export default CategoryDetailPage;
