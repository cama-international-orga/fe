// ProductsPage.tsx
import {
  container,
  thumbnail,
  productGrid,
  thumbnailContainer,
  companyBar,
  productContainer,
  thumbnailModifyButton,
  addCompanyButton,
  productPlusButton,
} from "./index.style.css";
import useCategoryDetailHook from "./hooks/useCategoryDetailHook";
import { useParams, useNavigate } from "react-router-dom";
import ProductContainer from "./components/Product";
import CompanyContainer from "./components/Company";
import plusIcon from "../../assets/svg/plus.svg";
import { useModal } from "../../contexts";
import AddProductModal from "./components/AddProductModal";
import Footer from "../../components/Footer";
import { PagenationButton } from "../../components/PagenationButton";
// 썸네일 예비 이미지
const DEFAULT_THUMBNAIL = plusIcon;

// 상품 예비 이미지
const DEFAULT_PRODUCT_IMAGE = plusIcon;

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
    page: currentPage,
    totalPages,
    handlePageChange,
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
        {isLoggedIn && (
          <button className={addCompanyButton} onClick={addCompanyModalOn}>
            +
          </button>
        )}
      </div>

      <div className={productContainer}>
        <div className={productGrid}>
          {products && products.length > 0 ? (
            <>
              {products.map((product) => (
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
              {isLoggedIn && (
                <div
                  style={{ textAlign: "center", width: "100%", marginTop: 24 }}
                >
                  <button
                    className={productPlusButton}
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
                    +
                  </button>
                  <p style={{ marginTop: 10, fontSize: 16, color: "#666" }}>
                    상품 추가하기
                  </p>
                </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: "center", width: "100%" }}>
              <img
                src={DEFAULT_PRODUCT_IMAGE}
                alt="예비 상품"
                style={{ width: 120, opacity: 0.5 }}
              />
              <p style={{ marginTop: 10, fontSize: 16, color: "#666" }}>
                등록된 상품이 없습니다.
              </p>
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
          )}
        </div>
      </div>
      <PagenationButton
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
      <Footer />
    </div>
  );
}

export default CategoryDetailPage;
