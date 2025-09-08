import { Link } from "react-router-dom";
import {
  navItem,
  navItemContainer,
  deleteButton,
  editButton,
  buttonContainer,
} from "./CategoryContainer.style.css";
import { useState } from "react";
import { CategoryContainerProps } from "../../../apis/main/type";
import Edit from "../../../assets/svg/edit.svg?react";

/**
 * 호버링중일 때, 콘테이너 우측 상단에 삭제, 수정버튼 보여주기
 * @author 홍규진
 */

function CategoryContainer({
  categoryName,
  categoryPath,
  isLast,
  onClickLast,
  handleDelete,
  handleEdit,
  isLoggedIn,
}: CategoryContainerProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={navItemContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && isLoggedIn && !isLast && (
        <div className={buttonContainer}>
          <button className={editButton} onClick={handleEdit} title="수정">
            <Edit width={36} height={36} fill="white" />
          </button>
          <button className={deleteButton} onClick={handleDelete} title="삭제">
            x
          </button>
        </div>
      )}
      {isLast ? (
        <button className={navItem} onClick={onClickLast}>
          +
        </button>
      ) : (
        <Link className={navItem} to={categoryPath}>
          {categoryName}
        </Link>
      )}
    </div>
  );
}

export default CategoryContainer;
