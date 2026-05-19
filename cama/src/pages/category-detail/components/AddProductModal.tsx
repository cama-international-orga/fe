/**
 *  카테고리 추가 모달
 *  @author 홍규진
 */

import React, { useState, useRef } from "react";
import { useModal } from "../../../contexts";
import { addProduct } from "../../../apis/products/products";
import {
  modalContainer,
  modalTitle,
  modalDesc,
  infoLabel,
  infoContainer,
  input,
  inputRow,
  infoAddButton,
  fileInputWrapper,
  fileInputBox,
  fileInputLabel,
  fileInput,
  fileInputButton,
  addButton,
  imagePreviewContainer,
  imagePreviewTitle,
  imagePreviewGrid,
  imagePreviewItem,
  imagePreview,
  imageRemoveButton,
} from "./AddProductModal.style.css";
import { Company } from "../../../apis/products/type";
import { toast } from "sonner";

export interface AddProductModalProps {
  categoryPath?: string;
  companies?: Company[]; // 회사 리스트 추가
  categoryDetailId?: string;
}

interface ProductInfo {
  infoKey: string;
  infoValue: string;
}

const AddProductModal = ({ categoryPath, companies, categoryDetailId }: AddProductModalProps) => {
  const { closeAllModals } = useModal();
  const [productName, setProductName] = useState<string>("");
  const [information, setInformation] = useState<ProductInfo[]>([
    { infoKey: "", infoValue: "" },
  ]);
  const [modelImages, setModelImages] = useState<File[]>([]);
  const [detailImages, setDetailImages] = useState<File[]>([]);
  const [specificationImages, setSpecificationImages] = useState<File[]>([]);
  const [installImages, setInstallImages] = useState<File[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>(
    companies?.[0]?.companyId ?? ""
  );
  const modelInputRef = useRef<HTMLInputElement>(null);
  const detailInputRef = useRef<HTMLInputElement>(null);
  const specificationInputRef = useRef<HTMLInputElement>(null);
  const installInputRef = useRef<HTMLInputElement>(null);

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
  const handleModelImagePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const pastedFiles = Array.from(e.clipboardData.files);
    // 이미지 파일만 필터링
    const imageFiles = pastedFiles.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length > 0) {
      e.preventDefault();
      setModelImages((prev) => [...prev, ...imageFiles]);
    }
  };

  const handleDetailImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDetailImages([...detailImages, ...Array.from(e.target.files)]);
    }
  };
  const handleDetailImagePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const pastedFiles = Array.from(e.clipboardData.files);
    // 이미지 파일만 필터링
    const imageFiles = pastedFiles.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length > 0) {
      e.preventDefault();
      setDetailImages((prev) => [...prev, ...imageFiles]);
    }
  };

  const handleSpecificationImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSpecificationImages([...specificationImages, ...Array.from(e.target.files)]);
    }
  };

  const handleSpecificationImagePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const pastedFiles = Array.from(e.clipboardData.files);
    // 이미지 파일만 필터링
    const imageFiles = pastedFiles.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length > 0) {
      e.preventDefault();
      setSpecificationImages((prev) => [...prev, ...imageFiles]);
    }
  };

  const handleInstallImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setInstallImages([...installImages, ...Array.from(e.target.files)]);
    }
  };
  const handleInstallImagePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    const pastedFiles = Array.from(e.clipboardData.files);
    // 이미지 파일만 필터링
    const imageFiles = pastedFiles.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length > 0) {
      e.preventDefault();
      setInstallImages((prev) => [...prev, ...imageFiles]);
    }
  };

  // 이미지 삭제 핸들러
  const removeModelImage = (index: number) => {
    setModelImages(modelImages.filter((_, i) => i !== index));
  };
  const removeDetailImage = (index: number) => {
    setDetailImages(detailImages.filter((_, i) => i !== index));
  }; // specification

  const removeSpecificationImage = (index: number) => {
    setSpecificationImages(specificationImages.filter((_, i) => i !== index));
  };
  const removeInstallImage = (index: number) => {
    setInstallImages(installImages.filter((_, i) => i !== index));
  };
  const checking = (e: any ) => {
    setSelectedCompanyId(e.target.value);
    console.log(categoryDetailId);
  }

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
    specificationImages.forEach((file) => formData.append("specificationImages", file));
    installImages.forEach((file) => formData.append("installImages", file));

    // 4. 전송
    await addProduct(
      categoryPath ? categoryPath : "0",
      selectedCompanyId ? selectedCompanyId : "0",
      formData,
      categoryDetailId? categoryDetailId : "0"
    );
    toast.success("상품이 등록되었습니다.");
    //window.location.reload();
  };

  return (
    <div className={modalContainer}>
      <h2 className={modalTitle}>상품 추가</h2>
      <div className={modalDesc}>새로운 상품 정보를 입력하여 등록해주세요.</div>
      <form onSubmit={handleSubmit}>
        <div className={infoContainer}>
          <label className={infoLabel}>카테고리 선택</label>
          <select
              className={input}
              value={selectedCompanyId}
              onChange={(e) => checking(e)}
              required
          >
            <option value="" disabled>
              카테고리를 선택해주세요
            </option>
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
              placeholder="제품명을 입력해주세요"
              className={input}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
          />
        </div>
        <div className={infoContainer}>
          <label className={infoLabel}>추가 정보</label>
          {information.map((info, idx) => (
              <div key={idx} className={inputRow}>
                <input
                    className={input}
                    placeholder="정보 명을 입력해주세요"
                    value={info.infoKey}
                    onChange={(e) =>
                        handleInfoChange(idx, "infoKey", e.target.value)
                    }
                    required
                />
                <input
                    className={input}
                    placeholder="정보 값을 입력해주세요"
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
                        style={{maxWidth: 60, marginLeft: 4}}
                        onClick={() => removeInfo(idx)}
                    >
                      삭제
                    </button>
                )}
              </div>
          ))}
          <button type="button" className={infoAddButton} onClick={addInfo}>
            <span>＋</span> 정보 추가
          </button>
        </div>
        <div className={fileInputWrapper}>
          <div
              className={fileInputBox}
              tabIndex={0}
              onPaste={handleModelImagePaste}
              style={{outline: "none", cursor: "pointer"}} // 클릭 시 기본 아웃라인 제거 및 커서 변경 (선택사항)
          >
            <div className={fileInputLabel}>대표 이미지</div>
            <p style={{fontSize: "12px", color: "#666", marginBottom: "8px"}}>
              영역을 클릭하고 붙여넣기
            </p>
            <label className={fileInputButton} htmlFor="model-image-upload">
              <span>📁</span> 파일 선택
            </label>
            <input
                id="model-image-upload"
                type="file"
                multiple
                accept="image/*"
                className={fileInput}
                ref={modelInputRef}
                onChange={handleModelImages}
            />
            {/* 대표 이미지 미리보기 */}
            {modelImages.length > 0 && (
                <div className={imagePreviewContainer}>
                  <div className={imagePreviewTitle}>
                    선택된 대표 이미지 ({modelImages.length}개)
                  </div>
                  <div className={imagePreviewGrid}>
                    {modelImages.map((file, index) => (
                        <div key={index} className={imagePreviewItem}>
                          <img
                              src={URL.createObjectURL(file)}
                              alt={`대표 이미지 ${index + 1}`}
                              className={imagePreview}
                          />
                          <button
                              type="button"
                              onClick={() => removeModelImage(index)}
                              className={imageRemoveButton}
                          >
                            ×
                          </button>
                        </div>
                    ))}
                  </div>
                </div>
            )}
          </div>

          <div
              className={fileInputBox}
              tabIndex={1}
              onPaste={handleDetailImagePaste}
              style={{outline: "none", cursor: "pointer"}} // 클릭 시 기본 아웃라인 제거 및 커서 변경 (선택사항)
          >
            <div className={fileInputLabel}>상세 이미지</div>
            <p style={{fontSize: "12px", color: "#666", marginBottom: "8px"}}>
              영역을 클릭하고 붙여넣기
            </p>
            <label className={fileInputButton} htmlFor="detail-image-upload">
              <span>📁</span> 파일 선택
            </label>
            <input
                id="detail-image-upload"
                type="file"
                multiple
                accept="image/*"
                className={fileInput}
                ref={detailInputRef}
                onChange={handleDetailImages}
            />
            {/* 상세 이미지 미리보기 */}
            {detailImages.length > 0 && (
                <div className={imagePreviewContainer}>
                  <div className={imagePreviewTitle}>
                    선택된 상세 이미지 ({detailImages.length}개)
                  </div>
                  <div className={imagePreviewGrid}>
                    {detailImages.map((file, index) => (
                        <div key={index} className={imagePreviewItem}>
                          <img
                              src={URL.createObjectURL(file)}
                              alt={`상세 이미지 ${index + 1}`}
                              className={imagePreview}
                          />
                          <button
                              type="button"
                              onClick={() => removeDetailImage(index)}
                              className={imageRemoveButton}
                          >
                            ×
                          </button>
                        </div>
                    ))}
                  </div>
                </div>
            )}
          </div>
        </div>

        <div className={fileInputWrapper}>
          <div
              className={fileInputBox}
              tabIndex={2}
              onPaste={handleSpecificationImagePaste}
              style={{outline: "none", cursor: "pointer"}} // 클릭 시 기본 아웃라인 제거 및 커서 변경 (선택사항)
          >
            <div className={fileInputLabel}>명세서 이미지</div>
            <p style={{fontSize: "12px", color: "#666", marginBottom: "8px"}}>
              영역을 클릭하고 붙여넣기
            </p>
            <label className={fileInputButton} htmlFor="specification-image-upload">
              <span>📁</span> 파일 선택
            </label>
            <input
                id="specification-image-upload"
                type="file"
                multiple
                accept="image/*"
                className={fileInput}
                ref={specificationInputRef}
                onChange={handleSpecificationImages}
            />
            {/* 명세서 이미지 미리보기 */}
            {specificationImages.length > 0 && (
                <div className={imagePreviewContainer}>
                  <div className={imagePreviewTitle}>
                    선택된 상세 이미지 ({specificationImages.length}개)
                  </div>
                  <div className={imagePreviewGrid}>
                    {specificationImages.map((file, index) => (
                        <div key={index} className={imagePreviewItem}>
                          <img
                              src={URL.createObjectURL(file)}
                              alt={`상세 이미지 ${index + 1}`}
                              className={imagePreview}
                          />
                          <button
                              type="button"
                              onClick={() => removeSpecificationImage(index)}
                              className={imageRemoveButton}
                          >
                            ×
                          </button>
                        </div>
                    ))}
                  </div>
                </div>
            )}
          </div>

          <div
              className={fileInputBox}
              tabIndex={3}
              onPaste={handleInstallImagePaste}
              style={{outline: "none", cursor: "pointer"}} // 클릭 시 기본 아웃라인 제거 및 커서 변경 (선택사항)
          >
            <div className={fileInputLabel}>설치 후 이미지</div>
            <p style={{fontSize: "12px", color: "#666", marginBottom: "8px"}}>
              영역을 클릭하고 붙여넣기
            </p>
            <label className={fileInputButton} htmlFor="install-image-upload">
              <span>📁</span> 파일 선택
            </label>
            <input
                id="install-image-upload"
                type="file"
                multiple
                accept="image/*"
                className={fileInput}
                ref={installInputRef}
                onChange={handleInstallImages}
            />
            {/* 설치 후 이미지 미리보기 */}
            {installImages.length > 0 && (
                <div className={imagePreviewContainer}>
                  <div className={imagePreviewTitle}>
                    선택된 설치 후 이미지 ({installImages.length}개)
                  </div>
                  <div className={imagePreviewGrid}>
                    {installImages.map((file, index) => (
                        <div key={index} className={imagePreviewItem}>
                          <img
                              src={URL.createObjectURL(file)}
                              alt={`상세 이미지 ${index + 1}`}
                              className={imagePreview}
                          />
                          <button
                              type="button"
                              onClick={() => removeInstallImage(index)}
                              className={imageRemoveButton}
                          >
                            ×
                          </button>
                        </div>
                    ))}
                  </div>
                </div>
            )}
          </div>

        </div>
        <button className={addButton} type="submit">
          등록
        </button>
      </form>
    </div>
  );
};

export default AddProductModal;
