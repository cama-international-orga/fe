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
import Header from "../../components/Header";

const MainPage = () => {
  const totalPages = 5;
  const { activePage, containerRef, scrollToPage } = useFullPageScroll({
    totalPages,
  });

  return (
    <div className={scrollContainer} ref={containerRef}>
      <div className={pageContainer}>
        <Header />
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
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
