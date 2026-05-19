// Company.tsx
import React from "react";
import {Company} from "../../../apis/products/type";
import {productItem} from "./Company.style.css";
// import useCategoryDetailHook from "../../category-detail/hooks/useCategoryDetailHook";
// import {toast} from "sonner";
// import {useNavigate} from "react-router-dom";
//import {productItem} from "./Product.style.css.ts";

export interface CompanyProps extends Company {
    categoryPath: string;
    categoryDetailId: string;
    isLoggedIn: boolean;
    isAll?: boolean;
    active?: boolean;
    onClick: () => void;
    companyImage: string;
}


const CompanyContainer: React.FC<CompanyProps> = ({
                                                      //categoryPath,
                                                      //categoryDetailId,
                                                      //companyId
                                                      companyName,
                                                      //isLoggedIn,
                                                      companyImage,
                                                      //isAll,
                                                      //active,
                                                      onClick
                                                  }) => {
    // const {removeCompanyModalOn} = useCategoryDetailHook(
    //     categoryPath,
    //     categoryDetailId,
    //     companyId,
    //     isLoggedIn,
    // );
    // //const navigate = useNavigate();
    // const [hovered, setHovered] = useState(false);

    return (
        <>
          <div
              className={productItem}
              //onMouseEnter={() => setHovered(true)}
              //onMouseLeave={() => setHovered(false)}
              onClick={onClick}
          >
            <img src={companyImage} alt={companyName}/>
          </div>
        </>



        // <button
        //   className={active ? companyBtn : companyBtnInactive}
        //   key={companyId}
        //   onClick={() => {
        //     navigate(`/categories/${categoryPath}/detail/${categoryDetailId}/company/${companyId}?page=0`);
        //   }}
        //   style={{ display: "flex", alignItems: "center", gap: 4 }}
    // >
    //   {companyName}
    //   {isLoggedIn && (
    //     <span
    //       className={deleteBtn}
    //       onClick={(e) => {
    //         e.stopPropagation();
    //         if (isAll) {
    //           toast.error("전체 상품을 삭제할 수 없습니다.");
    //         } else {
    //           removeCompanyModalOn(companyId);
    //         }
    //       }}
    //     >
    //       ×
    //     </span>
    //   )}
    // </button>
);
};

export default CompanyContainer;
