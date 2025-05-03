// components/index.tsx

import React from "react";
// import { Link } from 'react-router-dom';
// import { FaSearch } from "react-icons/fa";
import {
  header,
  container,
  logoContainer,
  logo,
  navList,
  nav,
} from "./index.style.css.ts";
import HeaderLogo from "../../assets/png/Logo.png";
import { Link } from "react-router-dom";
import CategoryContainer from "./components/CategoryContainer.tsx";
import { useModal } from "../../contexts/ModalContexts";
import { AddCategoryModal } from "./components/AddCategoryModal.tsx";
import DeleteModal from "../DeleteModal/index.tsx";
import { HeaderNavItem } from "../../apis/main/type.ts";
import { useHeaderHook } from "./hooks/useHeaderHook.ts";
import { toast } from "sonner";
export const Header: React.FC<{
  navItems: HeaderNavItem[];
  isLoggedIn: boolean;
}> = ({ navItems, isLoggedIn }) => {
  const { openModal, closeAllModals } = useModal();
  const { handleDelete } = useHeaderHook();

  return (
    <>
      <header className={header}>
        <div className={container}>
          <div className={logoContainer}>
            <Link to="/">
              <img src={HeaderLogo} alt="로고" className={logo} />
            </Link>
          </div>
          <nav className={nav}>
            <ul className={navList}>
              {navItems?.map((item) => (
                <CategoryContainer
                  key={item.categoryId}
                  categoryName={item.categoryName}
                  categoryPath={`/categories/${item.categoryPath}/0`}
                  isLast={false}
                  handleDelete={() => {
                    openModal({
                      component: DeleteModal,
                      props: {
                        handleDelete: async () => {
                          await handleDelete(item.categoryId);
                          closeAllModals();
                          toast.success("카테고리가 삭제되었습니다.");
                          window.location.reload();
                        },
                        handleCancel: () => {
                          closeAllModals();
                        },
                      },
                    });
                  }}
                  isLoggedIn={isLoggedIn}
                />
              ))}

              {isLoggedIn && (
                <CategoryContainer
                  key="add"
                  categoryName="+"
                  categoryPath="/new"
                  onClickLast={() => {
                    openModal({
                      component: AddCategoryModal,
                      props: {},
                    });
                  }}
                  isLast={true}
                  isLoggedIn={isLoggedIn}
                />
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
