// ProductsPage.tsx
import {
    container,
    cardContainer,
    productGrid,
    companyBar,
    productContainer,
    addCompanyButton,
    productPlusButton,
    productSortContainer,
    productFlexContainer, titleContainer,
    //subTitleContainer,
    mainWrapper, contentArea,
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
import { useLocation } from 'react-router-dom';
import Sidebar from "./components/Sidebar.tsx";
//import React, {useState} from "react";
import {navList, searchInput, searchInputWrapper, sidebar} from "./components/Sidebar.style.css.ts";
import useCategoryCompanyHook from "../category-company/hooks/useCategoryCompanyHook.ts";
import {useState} from "react";
// 상품 예비 이미지
const DEFAULT_PRODUCT_IMAGE = plusIcon;

function CategoryDetailPage({ isLoggedIn }: { isLoggedIn: boolean }) {
  const location = useLocation();
  const categoryName = location.state?.categoryName;
  const categoryDetailName = location.state?.categoryDetailName;
  const { categoryPath, categoryDetailId, companyId } = useParams();
  const navigate = useNavigate();
  const {
    companys,
    products,
    removeProductModalOn,
    addCompanyModalOn,
    editProductModalOn,
    productSortModalOn,
    page: currentPage,
    totalPages,
    handlePageChange,
  } = useCategoryDetailHook(
    categoryPath ? categoryPath : "0",
    categoryDetailId ? categoryDetailId : "0",
    companyId ? companyId : "0",
    isLoggedIn ? isLoggedIn : false,
  );
    const {
        sidebarCategory
    } = useCategoryCompanyHook(
        categoryPath ? categoryPath : "0",
        categoryDetailId ? categoryDetailId : "0",
        isLoggedIn ? isLoggedIn : false,
    );
//const [categoryDetailStateName] = useState<string>(categoryDetailName);
  const { openModal } = useModal();
    const [categoryDetail] = useState<string | undefined>(categoryDetailName);

    // const handleUpdate = (newValue: string | undefined) => {
    //     // undefined가 아닐 때만 업데이트
    //
    //     if (newValue !== undefined) {
    //         console.log(newValue);
    //         setCategoryDetail(newValue);
    //     }
    // };
  return (
      <>
    <div className={container}>
      <div className={mainWrapper}>
          <div className={sidebar}>
              <div className={searchInputWrapper}>
                  <input type="text" placeholder="Search" className={searchInput}/>
              </div>
              <div className={navList}>
                  {sidebarCategory?.map((sCategory) => (
                      <Sidebar
                          key={sCategory.categoryDetailId}
                          categoryDetailId={sCategory.categoryDetailId}
                          categoryPath={categoryPath}
                          categoryDetailName={sCategory.categoryDetailName}
                          isLoggedIn={isLoggedIn}
                          active={categoryDetailId === sCategory.categoryDetailId}
                          categoryName={categoryName}
                      />
                  ))}
              </div>
          </div>
          <div className={contentArea}>
              <div className={titleContainer}> {categoryDetail} </div>
              {/*<div className={subTitleContainer}> {categoryDetailName}</div>*/}
              <div className={cardContainer}>

                  <div className={companyBar}>
                      <CompanyContainer
                          key={"all-key"}
                          categoryPath={categoryPath ? categoryPath : "0"}
                          categoryDetailId={categoryDetailId ? categoryDetailId : "0"}
                          companyId={"0"}
                          companyName={"ALL"}
                          categoryDetailName={categoryDetailName}
                          isLoggedIn={isLoggedIn}
                          isAll={true}
                          active={companyId === "0"}
                      />
                      {companys?.map((company) => (
                          <CompanyContainer
                              key={company.companyId}
                              categoryDetailId={categoryDetailId ? categoryDetailId : "0"}
                              categoryPath={categoryPath ? categoryPath : "0"}
                              categoryDetailName={categoryDetailName}
                              companyId={company.companyId}
                              companyName={company.companyName}
                              isLoggedIn={isLoggedIn}
                              active={companyId === company.companyId}
                          />
                      ))}
                      {isLoggedIn && (
                          <button className={addCompanyButton} onClick={addCompanyModalOn}>
                              +
                          </button>
                      )}
                  </div>
              </div>

              {isLoggedIn && (
                  <div className={productSortContainer}>
                      <div className={productFlexContainer}/>
                      <button
                          onClick={productSortModalOn}
                          style={{
                              padding: "8px 16px",
                              background: "#f7f8fa",
                              border: "1.5px solid #e5e7eb",
                              borderRadius: "8px",
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#3a90eb",
                              cursor: "pointer",
                              transition: "all 0.2s",
                          }}
                          onMouseOver={(e) => {
                              e.currentTarget.style.background = "#eaf3fb";
                              e.currentTarget.style.border = "1.5px solid #3a90eb";
                          }}
                          onMouseOut={(e) => {
                              e.currentTarget.style.background = "#f7f8fa";
                              e.currentTarget.style.border = "1.5px solid #e5e7eb";
                          }}
                      >
                          정렬 설정
                      </button>
                  </div>
              )}

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
                                      onEdit={editProductModalOn}
                                      onRemove={removeProductModalOn}
                                      onClick={() => {
                                          navigate(`/products/${product.productsId}`);
                                      }}
                                      isLoggedIn={isLoggedIn}
                                  />
                              ))}
                              {isLoggedIn && (
                                  <div
                                      style={{textAlign: "center", width: "100%", marginTop: 24}}
                                  >
                                      <button
                                          className={productPlusButton}
                                          onClick={() =>
                                              openModal({
                                                  component: AddProductModal,
                                                  props: {
                                                      categoryPath: categoryPath ? categoryPath : "0",
                                                      companies: companys,
                                                      categoryDetailId: categoryDetailId ? categoryDetailId : "0",
                                                  },
                                              })
                                          }
                                      >
                                          +
                                      </button>
                                      <p style={{marginTop: 10, fontSize: 16, color: "#666"}}>
                                          상품 추가하기
                                      </p>
                                  </div>
                              )}
                          </>
                      ) : (
                          <div style={{textAlign: "center", width: "100%"}}>
                              <img
                                  src={DEFAULT_PRODUCT_IMAGE}
                                  alt="예비 상품"
                                  style={{width: 120, opacity: 0.5}}
                              />
                              <p style={{marginTop: 10, fontSize: 16, color: "#666"}}>
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
                                                  categoryDetailId: categoryDetailId ? categoryDetailId : "0",
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
          </div>

      </div>

    </div>
    <Footer/>
    </>
  );
}

export default CategoryDetailPage;
