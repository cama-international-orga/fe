// Company.tsx
import React from "react";
import { Company } from "../../../apis/products/type";
import { companyBar, companyBtn, deleteBtn } from "./Company.style.css";
import useCategoryDetailHook from "../hooks/useCategoryDetailHook";

export interface CompanyProps extends Company {
  isLoggedIn: boolean;
}
const CompanyContainer: React.FC<CompanyProps> = ({
  companyId,
  companyName,
  isLoggedIn,
}) => {
  const { removeCompanyModalOn } = useCategoryDetailHook(companyId);
  return (
    <div className={companyBar}>
      <button className={companyBtn} key={companyId}>
        {companyName}
      </button>
      {isLoggedIn && (
        <button
          className={deleteBtn}
          onClick={() => {
            removeCompanyModalOn(companyId);
          }}
        >
          X
        </button>
      )}
    </div>
  );
};

export default CompanyContainer;
