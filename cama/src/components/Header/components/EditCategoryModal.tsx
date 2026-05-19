/**
 *  카테고리 수정 모달
 *  @author 홍규진
 */

import { useState } from "react";
import {
  modalContainer,
  modalTitle,
  label,
  input,
  inputGuide,
  addButton,
} from "./EditCategoryModal.style.css";
import { useHeaderHook } from "../hooks/useHeaderHook";
import { useModal } from "../../../contexts";
import { HeaderNavItem } from "../../../apis/main/type";

interface EditCategoryModalProps {
  category: HeaderNavItem;
}

export const EditCategoryModal = ({ category }: EditCategoryModalProps) => {
  const { closeAllModals } = useModal();
  const [categoryName, setCategoryName] = useState(category.categoryName);
  const [categoryPath, setCategoryPath] = useState(category.categoryPath || "");
  const { handleEdit } = useHeaderHook();


  return (
    <div className={modalContainer}>
      <div className={modalTitle}>카테고리 수정</div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleEdit({
            categoryName,
            categoryPath,
            categoryBeforePath: category.categoryPath,
          });
          closeAllModals();
        }}
        style={{ width: "100%" }}
      >

        <div className={label}>카테고리 이름</div>
        <input
          type="text"
          placeholder="예: 신제품"
          className={input}
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />

        <div className={label}>카테고리 경로</div>
        <input
          type="text"
          placeholder="예: new-arrivals"
          className={input}
          value={categoryPath}
          onChange={(e) => setCategoryPath(e.target.value)}
        />
        <div className={inputGuide}>
          경로는 영어 소문자와 하이픈(-)만 사용 가능합니다. (예:
          cama-international)
        </div>

        <button className={addButton} type="submit">
          수정
        </button>
      </form>
    </div>
  );
};
