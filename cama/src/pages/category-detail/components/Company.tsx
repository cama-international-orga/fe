// Company.tsx
import React from "react";
import { Company } from "../../../apis/products/type";
import { companyBar, companyBtn, deleteBtn } from "./Company.style.css";
import useCategoryDetailHook from "../hooks/useCategoryDetailHook";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export interface CompanyProps extends Company {
  categoryPath: string;
  isLoggedIn: boolean;
  isAll?: boolean;
}
const CompanyContainer: React.FC<CompanyProps> = ({
  categoryPath,
  companyId,
  companyName,
  isLoggedIn,
  isAll,
}) => {
  const { removeCompanyModalOn } = useCategoryDetailHook(
    categoryPath,
    companyId
  );
  const navigate = useNavigate();
  return (
    <div className={companyBar}>
      <button
        className={companyBtn}
        key={companyId}
        onClick={() => {
          navigate(`/categories/${categoryPath}/${companyId}?page=0`);
        }}
      >
        {companyName}
      </button>
      {isLoggedIn && (
        <p
          className={deleteBtn}
          onClick={() => {
            if (isAll) {
              toast.error("전체 상품을 삭제할 수 없습니다.");
            } else {
              removeCompanyModalOn(companyId);
            }
          }}
        >
          X
        </p>
      )}
    </div>
  );
};

export default CompanyContainer;
