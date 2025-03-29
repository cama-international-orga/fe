// components/ProductItem.style.css.ts
import { style, globalStyle } from "@vanilla-extract/css";

export const imageItem = style({
  position: "relative",
  overflow: "hidden",
  borderRadius: "8px",
  width: "100%",
  height: "100%",
});

export const imageOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(3px) brightness(80%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
});

export const overlayText = style({
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
  padding: "20px",
  transform: "translateY(20px)",
  transition: "transform 0.3s ease",
});

// 이미지 스타일 (globalStyle 사용)
globalStyle(`${imageItem} > img`, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",
});

globalStyle(`${imageItem}:hover > img`, {
  transform: "scale(1.05)",
});

globalStyle(`${imageItem}:hover ${imageOverlay}`, {
  opacity: 1,
});

globalStyle(`${imageItem}:hover ${overlayText}`, {
  transform: "translateY(0)",
});
