import { style, globalStyle } from "@vanilla-extract/css";

// 컨테이너 스타일
export const container = style({
  display: "flex",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  flexDirection: "column",
  alignItems: "center",
});

// 썸네일 컨테이너 스타일
export const thumbnailContainer = style({
  marginBottom: "20px",
  display: "flex",
  gap: "10px",
});

// 썸네일 이미지 스타일
export const thumbnail = style({
  width: "100%",
  height: "auto",
});

// 카테고리 바 스타일
export const companyBar = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "10px",
  marginTop: "20px",
  alignItems: "center",
  padding: "10px",
  alignSelf: "center",
  justifyContent: "center",
  width: "60%",
  borderBottom: "1px solid #ddd",
});

// 카테고리 버튼에 대한 글로벌 스타일
globalStyle(`${companyBar} button`, {
  padding: "8px 16px",
  border: "none",
  height: "100%",
  background: "#f5f5f5",
  cursor: "pointer",
  transition: "background-color 0.3s",
});

globalStyle(`${companyBar} button:hover`, {
  background: "#ddd",
});

// 제품 컨테이너 스타일
export const productContainer = style({
  marginTop: "20px",
  padding: "60px",
  width: "100%",
});

// 제품 그리드 스타일 (4x2)
export const productGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
});

export const pageContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
});

export const pageButton = style({
  padding: "8px 16px",
  border: "1px solid #ddd",
  background: "#ffffff",
  cursor: "pointer",
  transition: "background-color 0.3s",
});

globalStyle(`${pageButton}:hover`, {
  background: "#ddd",
});
