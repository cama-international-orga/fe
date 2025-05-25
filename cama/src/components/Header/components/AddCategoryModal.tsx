/**
 *  카테고리 추가 모달
 *  @author 홍규진
 */

import { useState, useRef } from "react";
import {
  modalContainer,
  modalTitle,
  label,
  imageDropZone,
  imageIcon,
  imagePreview,
  imageGuide,
  input,
  inputGuide,
  addButton,
} from "./AddCategoryModal.style.css";
import { useHeaderHook } from "../hooks/useHeaderHook";
import { useModal } from "../../../contexts";

export const AddCategoryModal = () => {
  const { closeAllModals } = useModal();
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState<File | null>(null);
  const [categoryPath, setCategoryPath] = useState("");
  const { handleAdd } = useHeaderHook();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setCategoryImage(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className={modalContainer}>
      <div className={modalTitle}>카테고리 추가</div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleAdd({
            categoryName,
            categoryPath,
            thumbNail: categoryImage,
          });
          closeAllModals();
          window.location.reload();
        }}
        style={{ width: "100%" }}
      >
        <div className={label}>카테고리 이미지</div>
        <input
          id="categoryImageInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={(e) => setCategoryImage(e.target.files?.[0] || null)}
        />
        {categoryImage ? (
          <img
            src={URL.createObjectURL(categoryImage)}
            alt="카테고리 이미지"
            className={imagePreview}
            onClick={() => fileInputRef.current?.click()}
          />
        ) : (
          <div
            className={imageDropZone}
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <span className={imageIcon}>
              {" "}
              <svg width="40" height="40" fill="#bdbdbd" viewBox="0 0 24 24">
                <path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"></path>
                <path d="M21 1h-6c-.55 0-1 .45-1 1s.45 1 1 1h3.59l-9.83 9.83c-.39.39-.39 1.02 0 1.41.2.2.45.29.71.29s.51-.1.71-.29L19 3.41V7c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1z"></path>
              </svg>{" "}
            </span>
            <div style={{ fontWeight: 500, color: "#888", marginBottom: 4 }}>
              이미지를 드래그 앤 드롭하거나 클릭하여 업로드하세요.
            </div>
          </div>
        )}
        <div className={imageGuide}>
          카테고리 이미지의 비율은 "1920x525" 형식에 맞는 이미지에 맞게 자동으로
          조정됩니다.
        </div>
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
          추가
        </button>
      </form>
    </div>
  );
};
