import { style } from "@vanilla-extract/css";

export const companyBar = style({
  display: "flex",
  position: "relative",
});

export const companyBtn = style({
  background: "#ffffff",
  color: "#3a90eb",
  border: "none",
  padding: "10px 16px",
  fontWeight: 700,
  fontSize: "clamp(0.72rem, 0.82vw, 0.875rem)",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  cursor: "pointer",
  transition: "color 0.2s",
  selectors: {
    "&:hover": {
      color: "#2563eb",
    },
  },

  "@media": {
    "(max-width: 767px)": {
      padding: "8px 10px",
      fontSize: "0.72rem",
    },
    "(min-width: 768px) and (max-width: 1023px)": {
      padding: "9px 12px",
      fontSize: "0.75rem",
    },
    "(min-width: 1920px)": {
      padding: "10px 18px",
      fontSize: "clamp(0.8rem, 0.8vw, 0.95rem)",
    },
    "(min-width: 2560px)": {
      padding: "12px 22px",
      fontSize: "clamp(0.85rem, 0.78vw, 1rem)",
    },
  },
});

export const companyBtnInactive = style({
  background: "#ffffff",
  color: "#222831",
  border: "none",
  padding: "10px 16px",
  fontWeight: 700,
  fontSize: "clamp(0.72rem, 0.82vw, 0.875rem)",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  cursor: "pointer",
  transition: "color 0.2s",
  selectors: {
    "&:hover": {
      color: "#3a90eb",
    },
  },

  "@media": {
    "(max-width: 767px)": {
      padding: "8px 10px",
      fontSize: "0.72rem",
    },
    "(min-width: 768px) and (max-width: 1023px)": {
      padding: "9px 12px",
      fontSize: "0.75rem",
    },
    "(min-width: 1920px)": {
      padding: "10px 18px",
      fontSize: "clamp(0.8rem, 0.8vw, 0.95rem)",
    },
    "(min-width: 2560px)": {
      padding: "12px 22px",
      fontSize: "clamp(0.85rem, 0.78vw, 1rem)",
    },
  },
});

export const deleteBtn = style({
  background: "transparent",
  color: "#ff4d4f",
  border: "none",
  borderRadius: "50%",
  width: "18px",
  height: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: "1rem",
  marginLeft: "4px",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s",
  selectors: {
    "&:hover": {
      background: "#ffeaea",
      color: "#d32f2f",
    },
  },
});








//-------------------------------

import { globalStyle } from "@vanilla-extract/css";

// 제품 아이템 스타일
export const productItem = style({
  aspectRatio: "5 / 4",
  justifyContent: "center",
  position: "relative",
  padding: "0",
  display: "flex",
  margin: "5px",
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

// // 삭제 버튼 스타일
// export const deleteBtn = style({
//   color: "red",
//   border: "none",
//   background: "none",
//   position: "absolute",
//   top: "10px",
//   right: "10px",
//   fontSize: "1.3rem",
//   fontWeight: 700,
//   cursor: "pointer",
//   transition: "background 0.2s, color 0.2s",
//   ":hover": {
//     color: "#b30000",
//   },
// });

// 수정 버튼 스타일
export const editBtn = style({
  position: "absolute",
  background: "none",
  top: "10px",
  right: "40px",
});

export const productNameContainer = style({
  fontSize: "1.3rem",
  fontWeight: 700,
  color: "#fff",
});
