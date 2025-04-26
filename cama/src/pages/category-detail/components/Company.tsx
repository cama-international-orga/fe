// Company.tsx
import React from "react";
import { CompanyProps } from "../../../apis/products/type";
import { companyBar, companyBtn } from "./Company.style.css";

const Company: React.FC<CompanyProps> = ({ companyId, companyName }) => {
  return (
    <div className={companyBar}>
      <button className={companyBtn} key={companyId}>
        {companyName}
      </button>
    </div>
  );
};

export default Company;
