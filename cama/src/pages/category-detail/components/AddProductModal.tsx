/**
 *  카테고리 추가 모달
 *  @author 홍규진
 */

import React, { useState } from "react";
import { input, addButton } from "./AddCompanyModal.style.css";
import { useModal } from "../../../contexts";
import { addProduct } from "../../../apis/products/products";
import {
  modalContainer,
  modalTitle,
  infoLabel,
  infoContainer,
  inputRow,
  infoAddButton,
  fileInput,
} from "./AddProductModal.style.css";
import { Company } from "../../../apis/products/type";
import { toast } from "sonner";

export interface AddProductModalProps {
  categoryPath?: string;
  companies?: Company[]; // 회사 리스트 추가
}

interface ProductInfo {
  infoKey: string;
  infoValue: string;
}

const AddProductModal = ({ categoryPath, companies }: AddProductModalProps) => {
  const { closeAllModals } = useModal();
  const [productName, setProductName] = useState<string>("");
  const [information, setInformation] = useState<ProductInfo[]>([
    { infoKey: "", infoValue: "" },
  ]);
  const [modelImages, setModelImages] = useState<File[]>([]);
  const [detailImages, setDetailImages] = useState<File[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>(
    companies?.[0]?.companyId ?? ""
  );

  // InfoKey/Value 쌍 추가
  const addInfo = () =>
    setInformation([...information, { infoKey: "", infoValue: "" }]);

  // InfoKey/Value 쌍 삭제
  const removeInfo = (idx: number) =>
    setInformation(information.filter((_, i) => i !== idx));

  // InfoKey/Value 값 변경
  const handleInfoChange = (idx: number, field: string, value: string) => {
    const newInfo = [...information];
    newInfo[idx][field as keyof (typeof newInfo)[number]] = value;
    setInformation(newInfo);
  };

  // 이미지 파일 핸들러
  const handleModelImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setModelImages([...modelImages, ...Array.from(e.target.files)]);
    }
  };
  const handleDetailImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDetailImages([...detailImages, ...Array.from(e.target.files)]);
    }
  };

  // 폼 제출
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeAllModals();

    // 1. product 객체 생성
    const productData = {
      model: { productName },
      information,
    };

    // 2. product를 Blob으로 만들어 FormData에 추가
    const productBlob = new Blob([JSON.stringify(productData)], {
      type: "application/json",
    });
    const formData = new FormData();
    formData.append("product", productBlob);

    // 3. 이미지 파일들 추가
    modelImages.forEach((file) => formData.append("modelImages", file));
    detailImages.forEach((file) => formData.append("detailImages", file));

    // 4. 전송
    await addProduct(
      categoryPath ? categoryPath : "0",
      selectedCompanyId ? selectedCompanyId : "0",
      formData
    );
    toast.success("상품이 등록되었습니다.");
    window.location.reload();
  };

  return (
    <div className={modalContainer}>
      <h2 className={modalTitle}>상품 추가</h2>
      <form onSubmit={handleSubmit}>
        <div className={infoContainer}>
          <label className={infoLabel}>회사명</label>
          <select
            className={input}
            value={selectedCompanyId}
            onChange={(e) => setSelectedCompanyId(e.target.value)}
            required
          >
            {companies?.map((company) => (
              <option key={company.companyId} value={company.companyId}>
                {company.companyName}
              </option>
            ))}
          </select>
        </div>
        <div className={infoContainer}>
          <label className={infoLabel}>제품명</label>
          <input
            type="text"
            placeholder="제품명을 입력해주세요."
            className={input}
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className={infoContainer}>
          <label className={infoLabel}>제품 정보</label>
          {information.map((info, idx) => (
            <div key={idx} className={inputRow}>
              <input
                placeholder="정보 명을 입력해주세요."
                value={info.infoKey}
                onChange={(e) =>
                  handleInfoChange(idx, "infoKey", e.target.value)
                }
                required
              />
              <input
                placeholder="정보 값을 입력해주세요."
                value={info.infoValue}
                onChange={(e) =>
                  handleInfoChange(idx, "infoValue", e.target.value)
                }
                required
              />
              {information.length > 1 && (
                <button
                  type="button"
                  className={infoAddButton}
                  onClick={() => removeInfo(idx)}
                >
                  삭제
                </button>
              )}
            </div>
          ))}
          <button type="button" className={infoAddButton} onClick={addInfo}>
            정보 추가
          </button>
        </div>
        <div className={infoContainer}>
          <label className={infoLabel}>모델 이미지</label>
          <input
            type="file"
            multiple
            accept="image/*"
            className={fileInput}
            onChange={handleModelImages}
          />
        </div>
        <div className={infoContainer}>
          <label className={infoLabel}>상세 이미지</label>
          <input
            type="file"
            multiple
            accept="image/*"
            className={fileInput}
            onChange={handleDetailImages}
          />
        </div>
        <button className={addButton} type="submit">
          등록
        </button>
      </form>
    </div>
  );
};

export default AddProductModal;
