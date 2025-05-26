/**
 * 삭제 여부를 재차 확인하는 모달
 * 삭제 버튼을 누르면 삭제 여부를 재차 확인하는 모달이 나타난다.
 * @author 홍규진
 */

import {
  buttonContainer,
  deleteButton,
  cancelButton,
  modalContainer,
  modalHeader,
  closeBtn,
  warningSection,
  warningIcon,
  warningTitle,
  warningDesc,
} from "./index.style.css";

interface DeleteModalProps {
  handleDelete?: () => void;
  handleCancel?: () => void;
}

const DeleteModal = ({ handleDelete, handleCancel }: DeleteModalProps) => {
  return (
    <div className={modalContainer}>
      <div className={modalHeader}>
        삭제
        <button className={closeBtn} onClick={handleCancel} aria-label="닫기">
          ×
        </button>
      </div>
      <div className={warningSection}>
        <span className={warningIcon}>⚠️</span>
        <div className={warningTitle}>정말로 삭제하시겠습니까?</div>
        <div className={warningDesc}>
          이 작업은 되돌릴 수 없습니다. 삭제시 데이터가 영구적으로 제거됩니다.
        </div>
      </div>
      <div className={buttonContainer}>
        <button className={cancelButton} onClick={handleCancel}>
          취소
        </button>
        <button className={deleteButton} onClick={handleDelete}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
