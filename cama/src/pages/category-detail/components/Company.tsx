// Company.tsx
import React from "react";
import { Company } from "../../../apis/products/type";
import { companyBtn, companyBtnInactive, deleteBtn } from "./Company.style.css";
import useCategoryDetailHook from "../hooks/useCategoryDetailHook";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export interface CompanyProps extends Company {
  categoryPath: string;
  isLoggedIn: boolean;
  isAll?: boolean;
  active?: boolean;
}
const CompanyContainer: React.FC<CompanyProps> = ({
  categoryPath,
  companyId,
  companyName,
  isLoggedIn,
  isAll,
  active,
}) => {
  const { removeCompanyModalOn } = useCategoryDetailHook(
    categoryPath,
    companyId
  );
  const navigate = useNavigate();
  return (
    <button
      className={active ? companyBtn : companyBtnInactive}
      key={companyId}
      onClick={() => {
        navigate(`/categories/${categoryPath}/${companyId}?page=0`);
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
