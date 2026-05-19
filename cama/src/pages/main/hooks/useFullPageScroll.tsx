import { useState, useEffect, useRef, useCallback } from "react";
import { debounce } from "es-toolkit";

interface UseFullPageScrollProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (pageIndex: number) => void;
}

interface UseFullPageScrollReturn {
  activePage: number;
  containerRef: React.RefObject<HTMLDivElement>;
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
  const touchStartYRef = useRef<number>(0);

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

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  }, []);

  // passive: false 로 등록해야 preventDefault() 가 동작함
  const handleTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (isScrollingRef.current) return;

      const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;
      const SWIPE_THRESHOLD = 50;

      if (Math.abs(deltaY) < SWIPE_THRESHOLD) return;

      isScrollingRef.current = true;
      const direction = deltaY > 0 ? 1 : -1;
      handlePageChange(direction);
    },
    [handlePageChange]
  );

  const handleScroll = useCallback(() => {
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
  }, [onPageChange]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd, handleScroll]);

  return {
    activePage,
    containerRef,
    scrollToPage,
  };
};
