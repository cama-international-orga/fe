import React from "react";
import { useModal } from "../../contexts/ModalContexts";
import {
  modalOverlay,
  modalContent,
  modalImage,
  closeButton,
} from "./index.style.css.ts";

interface ImageModalProps {
  imageUrl?: string;
  altText?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrl = "",
  altText = "",
}) => {
  const { closeModal, modals } = useModal();

  const handleClose = () => {
    // 현재 모달의 ID를 찾아서 닫기
    const currentModal = modals.find((modal) => modal.component === ImageModal);
    if (currentModal) {
      closeModal(currentModal.id);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className={modalOverlay} onClick={handleOverlayClick}>
      <div className={modalContent}>
        <button className={closeButton} onClick={handleClose}>
          ×
        </button>
        <img src={imageUrl} alt={altText} className={modalImage} />
      </div>
    </div>
  );
};

export default ImageModal;
