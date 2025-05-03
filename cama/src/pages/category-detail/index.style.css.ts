import { style, globalStyle } from "@vanilla-extract/css";

// 컨테이너 스타일
export const container = style({
  marginTop: "90px",
  display: "flex",
  height: "auto",
  fontFamily: "Arial, sans-serif",
  flexDirection: "column",
  alignItems: "center",
});

// 썸네일 컨테이너 스타일
export const thumbnailContainer = style({
  width: "100%",
  marginBottom: "20px",
  display: "flex",
  gap: "10px",
  position: "relative",
});

export const thumbnailModifyButton = style({
  position: "absolute",
  top: "0",
  right: "0",
  border: "1px solid #ddd",
  background: "#ffffff",
  cursor: "pointer",
  transition: "background-color 0.3s",
});

// 썸네일 이미지 스타일
export const thumbnail = style({
  width: "100%",
  aspectRatio: "1920/330",
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

export const productPlusButton = style({
  padding: "8px 16px",
  border: "1px solid #ddd",
  background: "#ffffff",
});
