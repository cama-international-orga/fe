/**
 *  카테고리 추가 모달
 *  @author 홍규진
 */

import { useState } from "react";
import { input, addButton } from "./AddCompanyModal.style.css";
import { useModal } from "../../../contexts";
import { addCompany } from "../../../apis/products/products";

export default function AddCompanyModal({ categoryId }: { categoryId: string }) {
  const { closeAllModals } = useModal();

  const [companyName, setCompanyName] = useState("");
  return (
    <div>
      <h2>회사명 추가</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          closeAllModals();
          addCompany(categoryId, companyName);
          // window.location.reload();
        }}
      >
        <input
          type="text"
          placeholder="회사명"
          className={input}
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <button className={addButton} type="submit">
          추가
        </button>
      </form>
    </div>
  );
}
