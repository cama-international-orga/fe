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
} from "./index.style.css";

interface DeleteModalProps {
  handleDelete?: () => void;
  handleCancel?: () => void;
}

const DeleteModal = ({ handleDelete, handleCancel }: DeleteModalProps) => {
  return (
    <div className={modalContainer}>
      <h1>삭제</h1>
      <p>정말 삭제하시겠습니까?</p>
      <p>삭제 후 복구는 불가능합니다.</p>
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
