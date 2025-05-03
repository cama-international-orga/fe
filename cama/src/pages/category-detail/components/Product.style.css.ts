import { style, globalStyle } from "@vanilla-extract/css";

// 제품 아이템 스타일
export const productItem = style({
  position: "relative",
  padding: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  cursor: "pointer",
  background: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  transition: "box-shadow 0.2s",
  ":hover": {
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
  },
});

// 이미지 스타일
globalStyle(`${productItem} img`, {
  width: "100%",
  aspectRatio: "1/1",
  height: "auto",
  objectFit: "cover",
});

// 오버레이(상품명+삭제) 스타일
export const overlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.55)",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.2s",
  zIndex: 2,
  fontSize: "1.1rem",
  fontWeight: 500,
  pointerEvents: "none",
});

export const showOverlay = style({
  opacity: 1,
  pointerEvents: "auto",
});

// 삭제 버튼 스타일
export const deleteBtn = style({
  color: "red",
  border: "none",
  background: "none",
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "1.3rem",
  fontWeight: 700,
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s",
  ":hover": {
    color: "#b30000",
  },
});

export const productNameContainer = style({
  fontSize: "1.3rem",
  fontWeight: 700,
  color: "#fff",
});
