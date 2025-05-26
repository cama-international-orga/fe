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

// 카드 컨테이너 (썸네일+카테고리 바)
export const cardContainer = style({
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",

  padding: "0 0 24px 0",
  marginTop: "32px",
  width: "100%",
  maxWidth: "1200px",
  minWidth: "340px",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
});

// 썸네일 컨테이너
export const thumbnailContainer = style({
  width: "100%",
  borderRadius: "16px 16px 0 0",
  overflow: "hidden",
  position: "relative",
});

export const thumbnail = style({
  width: "100%",
  aspectRatio: "1920/330",
  objectFit: "cover",
  display: "block",
});

export const thumbnailModifyButton = style({
  position: "absolute",
  top: "12px",
  right: "16px",
  border: "1.5px solid #e5e7eb",
  background: "#fff",
  color: "#3a90eb",
  borderRadius: "8px",
  padding: "6px 18px",
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s, border 0.2s",
  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      color: "#2563eb",
      border: "1.5px solid #3a90eb",
    },
  },
});

// 카테고리 바 (태그형)
export const companyBar = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  alignItems: "center",
  padding: "24px 24px 0 24px",
  background: "#fff",
  borderRadius: "0 0 16px 16px",
  minHeight: "56px",
});

export const companyBtn = style({
  background: "#222831",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "8px 22px",
  fontWeight: 700,
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s",
  selectors: {
    "&:hover": {
      background: "#3a90eb",
      color: "#fff",
    },
  },
});

export const companyBtnInactive = style({
  background: "#f7f8fa",
  color: "#222831",
  border: "1.5px solid #e5e7eb",
  fontWeight: 500,
  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      color: "#3a90eb",
      border: "1.5px solid #3a90eb",
    },
  },
});

export const deleteBtn = style({
  background: "transparent",
  color: "#ff4d4f",
  border: "none",
  borderRadius: "50%",
  width: "22px",
  height: "22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: "1.1rem",
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

export const addCompanyButton = style({
  background: "#fff",
  color: "#3a90eb",
  border: "1.5px dashed #3a90eb",
  borderRadius: "8px",
  padding: "8px 18px",
  fontWeight: 700,
  fontSize: "1.1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s, border 0.2s",
  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      color: "#2563eb",
      border: "1.5px solid #3a90eb",
    },
  },
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
