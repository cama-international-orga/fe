import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaSearch, FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  header,
  container,
  logoContainer,
  logo,
  navList,
  nav,
  qna,
  qnaContainer,
  searchBoxContainer,
  searchIcon,
  headerSearchInput,
  hamburgerButton,
  measureContainer,
  measureItem,
  moreButtonWrapper,
  moreButtonStyle,
  moreDropdown,
  mobileOverlay,
  mobileDrawer,
  mobileCloseButton,
  mobileQnaButton,
  mobileSearchBox,
  mobileSearchInput,
  mobileAccordionRow,
  mobileAccordionLabel,
  mobileAccordionChevron,
  mobileSubList,
  mobileSubItem,
  mobileSubAddButton,
  mobileAdminButtonGroup,
  mobileAdminEdit,
  mobileAdminDelete,
  mobileSubItemRow,
} from "./index.style.css.ts";
import HeaderLogo from "../../assets/png/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import CategoryContainer from "./components/CategoryContainer.tsx";
import { useModal } from "../../contexts/ModalContexts";
import { AddCategoryModal } from "./components/AddCategoryModal.tsx";
import { AddCategoryDetailModal } from "./components/AddCategoryDetailModal.tsx";
import { EditCategoryDetailModal } from "./components/EditCategoryDetailModal.tsx";
import DeleteModal from "../DeleteModal/index.tsx";
import { HeaderNavItem } from "../../apis/main/type.ts";
import { useHeaderHook } from "./hooks/useHeaderHook.ts";
import { toast } from "sonner";
import { EditCategoryModal } from "./components/EditCategoryModal.tsx";
import { SendQnaModal } from "./components/SendQnaModal.tsx";

export const Header: React.FC<{
  navItems: HeaderNavItem[];
  isLoggedIn: boolean;
}> = ({ navItems, isLoggedIn }) => {
  const { openModal, closeAllModals } = useModal();
  const { handleDelete, handleDeleteDetail } = useHeaderHook();
  const navigate = useNavigate();

  const allItems = navItems ?? [];

  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState<number>(allItems.length);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const moreWrapperRef = useRef<HTMLDivElement>(null);

  const recalculate = useCallback(() => {
    if (!navRef.current) return;
    const available = navRef.current.clientWidth;
    const moreW = 70;
    const addW = isLoggedIn ? 50 : 0;

    const widths = measureRefs.current
      .slice(0, allItems.length)
      .map((el) => el?.offsetWidth ?? 0);

    let total = 0;
    let count = 0;
    for (let i = 0; i < widths.length; i++) {
      const remaining = widths.length - i - 1;
      const overhead = addW + (remaining > 0 ? moreW : 0);
      if (total + widths[i] + overhead > available) break;
      total += widths[i];
      count++;
    }
    setVisibleCount(count >= widths.length ? allItems.length : count);
  }, [allItems.length, isLoggedIn]);

  useEffect(() => {
    if (!navRef.current) return;
    const observer = new ResizeObserver(recalculate);
    observer.observe(navRef.current);
    recalculate();
    return () => observer.disconnect();
  }, [recalculate]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        moreOpen &&
        moreWrapperRef.current &&
        !moreWrapperRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [moreOpen]);

  const handleSearch = () => {
    const trimmed = searchQuery.trim();
    if (!trimmed) return;
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    setSearchQuery("");
  };

  const openQna = () => openModal({ component: SendQnaModal, props: {} });

  const visibleItems = allItems.slice(0, visibleCount);
  const overflowItems = allItems.slice(visibleCount);

  const makeCategoryHandlers = (item: HeaderNavItem) => ({
    handleDelete: () => {
      openModal({
        component: DeleteModal,
        props: {
          handleDelete: async () => {
            await handleDelete(item.categoryId);
            closeAllModals();
            toast.success("카테고리가 삭제되었습니다.");
            window.location.reload();
          },
          handleCancel: () => closeAllModals(),
        },
      });
    },
    handleEdit: () => {
      openModal({
        component: EditCategoryModal as React.ComponentType<any>,
        props: { category: item },
      });
    },
  });

  return (
    <>
      <header className={header}>
        <div className={container}>
          <div className={logoContainer}>
            <Link to="/">
              <img src={HeaderLogo} alt="로고" className={logo} />
            </Link>
          </div>

          {/* Hamburger – mobile only */}
          <button
            className={hamburgerButton}
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
          >
            <FaBars size={20} color="#fff" />
          </button>

          {/* Desktop nav */}
          <nav className={nav} ref={navRef}>
            {/* Hidden measurement spans for width calculation */}
            <div className={measureContainer}>
              {allItems.map((item, i) => (
                <span
                  key={item.categoryId}
                  ref={(el) => {
                    measureRefs.current[i] = el;
                  }}
                  className={measureItem}
                >
                  {item.categoryName}
                </span>
              ))}
            </div>

            <ul className={navList}>
              {visibleItems.map((item) => {
                const { handleDelete: hDel, handleEdit: hEdit } =
                  makeCategoryHandlers(item);
                return (
                  <CategoryContainer
                    key={item.categoryId}
                    categoryId={item.categoryId}
                    categoryName={item.categoryName}
                    categoryPath={`${item.categoryPath}`}
                    isLast={false}
                    categoryDetails={item.categoryDetails ?? undefined}
                    handleDelete={hDel}
                    handleEdit={hEdit}
                    isLoggedIn={isLoggedIn}
                  />
                );
              })}

              {/* "•••" overflow button */}
              {overflowItems.length > 0 && (
                <div className={moreButtonWrapper} ref={moreWrapperRef}>
                  <button
                    className={moreButtonStyle}
                    onClick={() => setMoreOpen((v) => !v)}
                    aria-label="더보기"
                  >
                    •••
                  </button>
                  {moreOpen && (
                    <div className={moreDropdown}>
                      {overflowItems.map((item) => {
                        const { handleDelete: hDel, handleEdit: hEdit } =
                          makeCategoryHandlers(item);
                        return (
                          <CategoryContainer
                            key={item.categoryId}
                            categoryId={item.categoryId}
                            categoryName={item.categoryName}
                            categoryPath={`${item.categoryPath}`}
                            isLast={false}
                            categoryDetails={item.categoryDetails ?? undefined}
                            handleDelete={hDel}
                            handleEdit={hEdit}
                            isLoggedIn={isLoggedIn}
                            dropdownDirection="right"
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {isLoggedIn && (
                <CategoryContainer
                  key="add"
                  categoryName="+"
                  categoryId=""
                  categoryPath="/new"
                  onClickLast={() =>
                    openModal({ component: AddCategoryModal, props: {} })
                  }
                  isLast={true}
                  isLoggedIn={isLoggedIn}
                />
              )}
            </ul>
          </nav>

          {/* Desktop Q&A + Search */}
          <div className={qnaContainer}>
            <div className={qna} onClick={openQna}>
              Q&A
            </div>
            <form
              className={searchBoxContainer}
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <input
                className={headerSearchInput}
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch
                className={searchIcon}
                size={16}
                color="#fff"
                onClick={handleSearch}
              />
            </form>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className={mobileOverlay} onClick={() => setMobileOpen(false)}>
          <div className={mobileDrawer} onClick={(e) => e.stopPropagation()}>
            <button
              className={mobileCloseButton}
              onClick={() => setMobileOpen(false)}
              aria-label="메뉴 닫기"
            >
              <FaTimes size={20} color="#fff" />
            </button>

            {allItems.map((item) => {
              const { handleDelete: hDel, handleEdit: hEdit } = makeCategoryHandlers(item);
              const isExpanded = expandedCategory === item.categoryId;
              return (
                <div key={item.categoryId}>
                  <div
                    className={mobileAccordionRow}
                    onClick={() =>
                      setExpandedCategory(isExpanded ? null : item.categoryId)
                    }
                  >
                    <span className={mobileAccordionLabel}>{item.categoryName}</span>

                    {isLoggedIn && (
                      <div
                        className={mobileAdminButtonGroup}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          className={mobileAdminEdit}
                          onClick={hEdit}
                        >
                          수정
                        </button>
                        <button
                          className={mobileAdminDelete}
                          onClick={hDel}
                        >
                          삭제
                        </button>
                      </div>
                    )}

                    <span className={mobileAccordionChevron}>
                      {isExpanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                    </span>
                  </div>

                  {isExpanded && (
                    <div className={mobileSubList}>
                      {item.categoryDetails?.map((detail) => (
                        <div key={detail.categoryDetailId} className={mobileSubItemRow}>
                          <Link
                            className={mobileSubItem}
                            style={{ flex: 1, borderBottom: "none" }}
                            to={`/categories/${item.categoryPath}/detail/${detail.categoryDetailId}/company`}
                            state={{
                              categoryName: item.categoryName,
                              categoryDetailName: detail.categoryDetailName,
                            }}
                            onClick={() => setMobileOpen(false)}
                          >
                            {detail.categoryDetailName}
                          </Link>

                          {isLoggedIn && (
                            <div
                              className={mobileAdminButtonGroup}
                              style={{ paddingRight: "0.5rem" }}
                            >
                              <button
                                className={mobileAdminEdit}
                                onClick={() =>
                                  openModal({
                                    component: EditCategoryDetailModal,
                                    props: {
                                      categoryPath: item.categoryPath ?? "",
                                      categoryName: item.categoryName,
                                      categoryDetailId: detail.categoryDetailId,
                                      categoryDetailName: detail.categoryDetailName,
                                    },
                                  })
                                }
                              >
                                수정
                              </button>
                              <button
                                className={mobileAdminDelete}
                                onClick={() =>
                                  openModal({
                                    component: DeleteModal,
                                    props: {
                                      handleDelete: async () => {
                                        await handleDeleteDetail({
                                          categoryPath: item.categoryPath ?? "",
                                          categoryDetailId: detail.categoryDetailId,
                                        });
                                        closeAllModals();
                                        toast.success("카테고리 디테일이 삭제되었습니다.");
                                        window.location.reload();
                                      },
                                      handleCancel: () => closeAllModals(),
                                    },
                                  })
                                }
                              >
                                삭제
                              </button>
                            </div>
                          )}
                        </div>
                      ))}

                      {isLoggedIn && (
                        <button
                          className={mobileSubAddButton}
                          onClick={() =>
                            openModal({
                              component: AddCategoryDetailModal,
                              props: {
                                categoryPath: item.categoryPath,
                                categoryName: item.categoryName,
                              },
                            })
                          }
                        >
                          + 세부 카테고리 추가
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            <button
              className={mobileQnaButton}
              onClick={() => {
                setMobileOpen(false);
                openQna();
              }}
            >
              Q&A
            </button>

            <form
              className={mobileSearchBox}
              onSubmit={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                handleSearch();
              }}
            >
              <input
                className={mobileSearchInput}
                type="text"
                placeholder="SEARCH"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch
                size={14}
                color="#fff"
                style={{ cursor: "pointer", flexShrink: 0 }}
                onClick={() => {
                  setMobileOpen(false);
                  handleSearch();
                }}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
