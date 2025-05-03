import { useState, useEffect, useRef, useCallback } from "react";
import { debounce } from "es-toolkit";

interface UseFullPageScrollProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (pageIndex: number) => void;
}

interface UseFullPageScrollReturn {
  activePage: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  scrollToPage: (pageIndex: number) => void;
}

export const useFullPageScroll = ({
  totalPages,
  initialPage = 0,
  onPageChange,
}: UseFullPageScrollProps): UseFullPageScrollReturn => {
  const [activePage, setActivePage] = useState(initialPage);
  const containerRef = useRef<HTMLDivElement>(null);
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
      if (onPageChange) onPageChange(newPage);
    }, 700),
    [activePage, totalPages, scrollToPage, onPageChange]
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

  // 예시: 페이지가 바뀔 때마다 onPageChange 호출
  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollTop = window.scrollY;
    const children = Array.from(containerRef.current.children) as HTMLElement[];

    let pageIndex = 0;
    for (let i = 0; i < children.length; i++) {
      if (scrollTop >= children[i].offsetTop) {
        pageIndex = i;
      }
    }

    setActivePage(pageIndex);
    if (onPageChange) onPageChange(pageIndex);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, [handleWheel, handleScroll, onPageChange]);

  return {
    activePage,
    containerRef,
    scrollToPage,
  };
};
