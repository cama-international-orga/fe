/**
 *  카테고리 추가 모달
 *  @author 홍규진
 */

import { useState, useRef } from "react";
import {
  input,
  addButton,
  modalContainer,
  modalTitle,
  form,
  infoLabel,
  imagePreview,
  fileInput,
  fileInputLabel,
} from "./AddCompanyModal.style.css";
import { useModal } from "../../../contexts";
import { addCompany } from "../../../apis/products/products";

interface AddCompanyModalProps {
  categoryPath?: string;
  categoryDetailId?: string;
}

const AddCompanyModal = ({ categoryPath, categoryDetailId }: AddCompanyModalProps) => {
  const { closeAllModals } = useModal();
  const [companyName, setCompanyName] = useState("");
  const [companyLogo, setCompanyLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCompanyLogo(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={modalContainer}>
      <h2 className={modalTitle}>회사 추가</h2>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          closeAllModals();

          await addCompany(
            categoryPath ? categoryPath : "0",
            categoryDetailId ? categoryDetailId : "0",
            companyName,
            companyLogo || undefined
          );
         // window.location.reload();
        }}
        className={form}
      >
        <label className={infoLabel}>회사명</label>
        <input
          type="text"
          placeholder="회사명을 입력해주세요 예) 카마 인터내셔널"
          className={input}
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />

        <label className={infoLabel}>
          회사 로고 - 이는 Detail 페이지에서 사용됩니다.
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleLogoChange}
          className={fileInput}
        />

        <div className={fileInputLabel} onClick={handleFileInputClick}>
          {logoPreview ? (
            <img
              src={logoPreview}
              alt="로고 미리보기"
              className={imagePreview}
            />
          ) : (
            <span>{`로고 이미지를 선택해주세요.`}</span>
          )}
        </div>

        <button className={addButton} type="submit">
          추가
        </button>
      </form>
    </div>
  );
};

export default AddCompanyModal;
