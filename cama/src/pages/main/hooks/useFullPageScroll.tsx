import { useState, useEffect, useRef, useCallback } from "react";
import { debounce } from "es-toolkit";

interface UseFullPageScrollProps {
  totalPages: number;
  initialPage?: number;
}

interface UseFullPageScrollReturn {
  activePage: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  scrollToPage: (pageIndex: number) => void;
}

export const useFullPageScroll = ({
  totalPages,
  initialPage = 0,
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

  return {
    activePage,
    containerRef,
    scrollToPage,
  };
};
