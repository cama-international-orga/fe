import { useState, useEffect, useRef, useCallback } from "react";
import { debounce } from "es-toolkit";
import {
  scrollContainer,
  pageContainer,
  paginationContainer,
  paginationDot,
  activeDot,
} from "./index.style.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";

const MainPage = () => {
  const [activePage, setActivePage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalPages = 5;
  const isScrollingRef = useRef(false);

  // 페이지 이동 함수
  const scrollToPage = useCallback((pageIndex: number) => {
    if (!containerRef.current) return;

    const targetPage = containerRef.current.children[pageIndex] as HTMLElement;
    if (targetPage) {
      window.scrollTo({
        top: targetPage.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  // 디바운스된 페이지 변경 핸들러
  const handlePageChange = useCallback(
    debounce((direction: number) => {
      const newPage = Math.max(
        0,
        Math.min(totalPages - 1, activePage + direction)
      );
      setActivePage(newPage);
      scrollToPage(newPage);
      isScrollingRef.current = false;
    }, 400),
    [activePage, totalPages, scrollToPage]
  );

  // 휠 이벤트 핸들러
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      if (isScrollingRef.current) return;

      isScrollingRef.current = true;
      const direction = e.deltaY > 0 ? 1 : -1;
      handlePageChange(direction);
    },
    [handlePageChange]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  return (
    <>
      <div className={scrollContainer} ref={containerRef}>
        <div className={pageContainer}>
          <Page1 />
        </div>
        <div className={pageContainer}>
          <Page2 />
        </div>
        <div className={pageContainer}>
          <Page3 />
        </div>
        <div className={pageContainer}>
          <Page4 />
        </div>
        <div className={pageContainer}>
          <Page5 />
        </div>
      </div>

      {/* 페이지 네비게이션 */}
      <div className={paginationContainer}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`${paginationDot} ${
              index === activePage ? activeDot : ""
            }`}
            onClick={() => {
              setActivePage(index);
              scrollToPage(index);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default MainPage;
