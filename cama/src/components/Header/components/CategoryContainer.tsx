import { Link } from "react-router-dom";
import {
    navItem,
    navItemContainer,
    deleteButton,
    editButton,
    buttonContainer,
    dropdownMenu,
    dropdownItem,
    dropdownMenuVisible,
    dropdownMenuRight,
    dropdownMenuRightVisible,
    buttonContainerDetail,
} from "./CategoryContainer.style.css";
import { useState } from "react";
import { CategoryContainerProps } from "../../../apis/main/type";
import Edit from "../../../assets/svg/edit.svg?react";
import {useModal} from "../../../contexts";
import {AddCategoryDetailModal} from "./AddCategoryDetailModal.tsx";
import {EditCategoryDetailModal} from "./EditCategoryDetailModal.tsx";
import DeleteModal from "../../DeleteModal";
import {toast} from "sonner";
import {useHeaderHook} from "../hooks/useHeaderHook.ts";

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
                             categoryDetails,
                             dropdownDirection = 'down',
                           }: CategoryContainerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [ isLinkHovered, setLinkHovered] = useState(false);
  //const [isFirst, setIsFirst] = useState(true);
    const { openModal,  closeAllModals} = useModal();
    const { handleDeleteDetail } = useHeaderHook();
  // Link + Dropdown 전체 hover 상태 통합 관리
  const handleContainerMouseEnter = () => {
    setIsHovered(true);
    setLinkHovered(true);
  };

  const handleContainerMouseLeave = () => {
    setIsHovered(false);
    setLinkHovered(false);
  };

  return (
      <div
          className={navItemContainer}
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
      >
        {isHovered && isLoggedIn && !isLast && (
            <div className={buttonContainer}>
              <button className={editButton} onClick={handleEdit} title="수정">
                <Edit width={36} height={36} fill="white"/>
              </button>
              <button className={deleteButton} onClick={handleDelete} title="삭제">
                x
              </button>
            </div>
        )}

        {isLast && isLoggedIn ? (
            <button className={navItem} onClick={onClickLast}>
              +
            </button>
        ) : (
            <Link className={navItem}
              to={`/categories/${categoryPath}/detail/0/company`}
              state={{ categoryName: categoryName, categoryDetailName: '' }}
            >
                {categoryName}
            </Link>
        )
            // categoryDetails?.map((item, index) => {
            //     if (index == 0) {
            //         return (
            //             <Link className={navItem}
            //                   to={`/categories/${categoryPath}/detail/${item.categoryDetailId}/company`}
            //                   state={{ categoryName: categoryName, categoryDetailName: item.categoryDetailName }}
            //             >
            //                 {categoryName}
            //             </Link>
            //         )
            //     }
            // }))
        }


        {/* 드롭다운 - 컨테이너 hover일 때만 표시 */}
            {isLinkHovered && !isLast && (
            <div className={
              dropdownDirection === 'right'
                ? `${dropdownMenuRight} ${dropdownMenuRightVisible}`
                : `${dropdownMenu} ${dropdownMenuVisible.true}`
            }>
                {categoryDetails?.map((item) => (
                    // 💡 여러 요소를 반환할 때는 반드시 부모 태그(Fragment)가 필요합니다.
                    <>
                        <Link
                            className={dropdownItem}
                            to={`/categories/${categoryPath}/detail/${item.categoryDetailId}/company`}
                            state={{ categoryName: categoryName, categoryDetailName: item.categoryDetailName }}
                        >
                            {item.categoryDetailName}
                        </Link>

                        {isLoggedIn && (
                            <div className={buttonContainerDetail}>
                                <button className={editButton} onClick={() => {
                                    openModal({
                                        component: EditCategoryDetailModal,
                                        props: {
                                            categoryPath: categoryPath,
                                            categoryName: categoryName,
                                            categoryDetailId: item.categoryDetailId,
                                            categoryDetailName: item.categoryDetailName,
                                        }
                                    })
                                    //closeAllModals();
                                }} title="수정">
                                    <Edit width={36} height={36} fill="white"/>
                                </button>
                                <button className={deleteButton} onClick={() => {
                                    openModal({
                                        component: DeleteModal,
                                        props: {
                                            handleDelete: async () => {
                                                await handleDeleteDetail({
                                                    categoryPath: categoryPath,
                                                    categoryDetailId: item.categoryDetailId,
                                                });
                                                closeAllModals();
                                                toast.success("카테고리 디테일이 삭제되었습니다.");
                                                window.location.reload();
                                            },
                                            handleCancel: () => {
                                                closeAllModals();
                                            },
                                        },
                                    });
                                }} title="삭제">
                                    x
                                </button>
                            </div>
                        )}
                    </>
                ))}



              {isLoggedIn && (
                  <div
                      className={`${dropdownItem} ${dropdownMenuVisible ? 'visible' : ''}`}
                      style={{
                        textAlign: "center"
                      }}
                      onClick={() => {
                          openModal({
                              component: AddCategoryDetailModal,
                              props: {
                                  categoryPath: categoryPath,
                                  categoryName: categoryName
                              },
                          });
                      }}
                  >
                    +
                  </div>
              )}
            </div>
        )}

      </div>
  );
}

export default CategoryContainer;
