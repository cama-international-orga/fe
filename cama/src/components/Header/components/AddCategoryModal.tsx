/**
 *  카테고리 추가 모달
 *  @author 홍규진
 */

import { useState } from "react";
import {
  input,
  image,
  addButton,
  imageContainer,
} from "./AddCategoryModal.style.css";
import plusImage from "@/assets/svg/plus.svg";
import { useHeaderHook } from "../hooks/useHeaderHook";
import { useModal } from "../../../contexts";
export const AddCategoryModal = () => {
  const { closeAllModals } = useModal();
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState<File | null>(null);
  const [categoryPath, setCategoryPath] = useState("");
  const { handleAdd } = useHeaderHook();
  return (
    <div>
      <h1>카테고리 추가</h1>
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
      >
        <input
          id="categoryImageInput"
          type="file"
          accept="image/*"
          placeholder="카테고리 이미지"
          onChange={(e) => setCategoryImage(e.target.files?.[0] || null)}
          style={{ display: "none" }}
        />

        {categoryImage ? (
          <div
            className={imageContainer}
            onClick={() =>
              document.getElementById("categoryImageInput")?.click()
            }
          >
            <img
              src={URL.createObjectURL(categoryImage)}
              alt="카테고리 이미지"
              className={image}
            />
          </div>
        ) : (
          <div className={imageContainer}>
            <img
              src={plusImage}
              alt="카테고리 이미지"
              className={image}
              onClick={() =>
                document.getElementById("categoryImageInput")?.click()
              }
            />
          </div>
        )}
        <h2>
          카테고리 이미지의 비율은 "1920x525" 형식에 맞는 이미지에 맞게 자동으로
          조정됩니다.
        </h2>
        <input
          type="text"
          placeholder="카테고리 이름"
          className={input}
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <input
          type="text"
          placeholder="카테고리 경로(예: cama-international)"
          className={input}
          value={categoryPath}
          onChange={(e) => setCategoryPath(e.target.value)}
        />
        <button className={addButton} type="submit">
          추가
        </button>
      </form>
    </div>
  );
};
