/**
 *  카테고리 추가 모달
 *  @author 홍규진
 */

import { useState } from "react";
import { input, addButton } from "./AddCompanyModal.style.css";
import { useModal } from "../../../contexts";
import { addCompany } from "../../../apis/products/products";

interface AddCompanyModalProps {
  categoryPath?: string;
}

const AddCompanyModal = ({ categoryPath }: AddCompanyModalProps) => {
  const { closeAllModals } = useModal();
  const [companyName, setCompanyName] = useState("");
  return (
    <div>
      <h2>회사명 추가</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          closeAllModals();
          await addCompany(categoryPath ? categoryPath : "0", companyName);
          window.location.reload();
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
};

export default AddCompanyModal;
