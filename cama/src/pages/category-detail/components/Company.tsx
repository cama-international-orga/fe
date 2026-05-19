// Company.tsx
import React from "react";
import {Company} from "../../../apis/products/type";
import { companyBtn, companyBtnInactive, deleteBtn} from "./Company.style.css";
import useCategoryDetailHook from "../hooks/useCategoryDetailHook";
import {toast} from "sonner";
import {useNavigate} from "react-router-dom";
//import {productItem} from "./Product.style.css.ts";

export interface CompanyProps extends Company {
    categoryPath: string;
    categoryDetailId: string;
    categoryDetailName: string;
    isLoggedIn: boolean;
    isAll?: boolean;
    active?: boolean;
    //onClick: () => void;
}


const CompanyContainer: React.FC<CompanyProps> = ({
                                                      categoryPath,
                                                      categoryDetailId,
                                                      companyId,
                                                      companyName,
                                                      categoryDetailName,
                                                      isLoggedIn,
                                                      isAll,
                                                      active,
                                                  }) => {
    const {removeCompanyModalOn} = useCategoryDetailHook(
        categoryPath,
        categoryDetailId,
        companyId,
        isLoggedIn,
    );
    const navigate = useNavigate();
    //const [hovered, setHovered] = useState(false);
    //console.log(categoryDetailName);
    return (
        <button
          className={active ? companyBtn : companyBtnInactive}
          key={companyId}
          onClick={() => {
            navigate(`/categories/${categoryPath}/detail/${categoryDetailId}/company/${companyId}?page=0`,{
                state: {
                    categoryDetailName: categoryDetailName,
                }
            });
          }}
          style={{ display: "flex", alignItems: "center", gap: 4 }}
    >
      {companyName}
      {isLoggedIn && (
        <span
          className={deleteBtn}
          onClick={(e) => {
            e.stopPropagation();
            if (isAll) {
              toast.error("전체 상품을 삭제할 수 없습니다.");
            } else {
              removeCompanyModalOn(companyId);
            }
          }}
        >
          ×
        </span>
      )}
    </button>
);
};

export default CompanyContainer;
