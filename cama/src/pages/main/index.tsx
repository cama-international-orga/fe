// MainPage.tsx
import { useFullPageScroll } from "./hooks/useFullPageScroll";
import {
  scrollContainer,
  pageContainer,
  paginationContainer,
  paginationDot,
  activeDot,
} from "./index.style.css";
import { Page1, Page2, Page3, Page4, Page5 } from "./components";
import { useState } from "react";

const MainPage = () => {
  const totalPages = 5;
  const [activePage, setActivePage] = useState(0);
  const { containerRef, scrollToPage } = useFullPageScroll({
    totalPages,
    onPageChange: setActivePage,
  });

  return (
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

      {/* 페이지 네비게이션 */}
      <div className={paginationContainer}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`${paginationDot} ${
              index === activePage ? activeDot : ""
            }`}
            onClick={() => {
              scrollToPage(index);
              setActivePage(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
