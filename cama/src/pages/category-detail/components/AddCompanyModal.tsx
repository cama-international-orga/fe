/**
 *  카테고리 추가 모달
 *  @author 홍규진
 */

import { useState } from "react";
import {
  input,
  addButton,
  modalContainer,
  modalTitle,
  form,
  infoLabel,
} from "./AddCompanyModal.style.css";
import { useModal } from "../../../contexts";
import { addCompany } from "../../../apis/products/products";

interface AddCompanyModalProps {
  categoryPath?: string;
}

const AddCompanyModal = ({ categoryPath }: AddCompanyModalProps) => {
  const { closeAllModals } = useModal();
  const [companyName, setCompanyName] = useState("");
  return (
    <div className={modalContainer}>
      <h2 className={modalTitle}>회사명 추가</h2>
      <label className={infoLabel}>회사명</label>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          closeAllModals();
          await addCompany(categoryPath ? categoryPath : "0", companyName);
          window.location.reload();
        }}
        className={form}
      >
        <input
          type="text"
          placeholder="회사명을 입력해주세요 예) 카마 인터내셔널"
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
