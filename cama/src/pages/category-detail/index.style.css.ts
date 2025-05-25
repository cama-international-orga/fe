import { style } from "@vanilla-extract/css";

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
  gap: "0.1rem",
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

// 제품 그리드 스타일 (5개씩)
export const productGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
});

export const productPlusButton = style({
  width: "70%",
  height: "70%",
  borderRadius: "16px",
  border: "2px dashed #bdbdbd",
  background: "#f7f8fa",
  color: "#bdbdbd",
  fontSize: "3.2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  margin: "0 auto",
  transition: "background 0.2s, border 0.2s, color 0.2s",
  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      border: "2px solid #3a90eb",
      color: "#3a90eb",
    },
  },
});

export const addCompanyButton = style({
  padding: "11px 0",
  border: "1px dashed #bdbdbd",
  background: "transparent",
  color: "#bdbdbd",
  fontSize: "1.1rem",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s",
  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      border: "1px solid #3a90eb",
      color: "#3a90eb",
    },
  },
  textAlign: "center",
});
