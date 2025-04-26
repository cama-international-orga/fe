import { Link } from "react-router-dom";
import {
  navItem,
  navItemContainer,
  deleteButton,
} from "./CategoryContainer.style.css";
import { useState } from "react";
import { CategoryContainerProps } from "../../../apis/main/type";
/**
 * 호버링중일 때, 콘테이너 우측 상단에 삭제버튼 보여주기
 * @author 홍규진
 */

function CategoryContainer({
  categoryName,
  categoryPath,
  isLast,
  onClickLast,
  handleDelete,
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
        <button className={deleteButton} onClick={handleDelete}>
          -
        </button>
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
