import { useEffect, useRef, FC } from "react";
import { gsap } from "gsap";
import {
  fullview,
  gridMotionContainer,
  intro,
  noscroll,
  row,
  rowItem,
  rowItemContent,
  rowItemImg,
  rowItemInner,
} from "./index.style.css";
interface GridMotionProps {
  items?: (string | React.ReactNode)[];
  gradientColor?: string;
}
const GridMotion: FC<GridMotionProps> = ({
  items = [],
  gradientColor = "black",
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef<number>(window.innerWidth / 2);

  // Ensure the grid has 20 items (4 rows x 5 columns) by default
  const totalItems = 20;
  const defaultItems = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index + 1}`
  );
  const combinedItems =
    items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e: MouseEvent): void => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = (): void => {
      const maxMoveAmount = 500;
      const baseDuration = 0.9; // Base duration for inertia
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]; // Different inertia for each row, outer rows slower

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          // Apply inertia and staggered stop
          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop(); // Properly remove the ticker listener
    };
  }, []);

  return (
    <div className={`${noscroll} loading`} ref={gridRef}>
      <section
        className={intro}
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className={gridMotionContainer}>
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className={row}
              ref={(el) => {
                rowRefs.current[rowIndex] = el;
                return undefined;
              }}
            >
              {Array.from({ length: 5 }, (_, itemIndex) => {
                const content = combinedItems[rowIndex * 5 + itemIndex];
                return (
                  <div key={itemIndex} className={rowItem}>
                    <div className={rowItemInner}>
                      {typeof content === "string" &&
                      content.startsWith("http") ? (
                        <div
                          className={rowItemImg}
                          style={{
                            backgroundImage: `url(${content})`,
                          }}
                        ></div>
                      ) : (
                        <div className={rowItemContent}>{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className={fullview}></div>
      </section>
    </div>
  );
};
export default GridMotion;
