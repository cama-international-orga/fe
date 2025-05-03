// Footer.style.css.ts
import { style, globalStyle } from "@vanilla-extract/css";

export const footer = style({
  width: "100%",
  backgroundColor: "#1A1A1A",
  color: "#A9A9A9",
  padding: "60px 0 40px",
  fontFamily: "Arial, sans-serif",
});

// 컨테이너 스타일
export const footerContainer = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 ",
});

// 푸터 콘텐츠 스타일
export const footerContent = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginTop: "40px",
});

// 로고 섹션 스타일
export const footerLogo = style({
  borderBottom: "1px solid #333",
  paddingBottom: "30px",
});

// 글로벌 스타일 적용 (자식 요소 타겟팅)
globalStyle(`${footerLogo} h2`, {
  color: "#FFFFFF",
  fontSize: "24px",
  marginBottom: "15px",
  fontWeight: "normal",
});

globalStyle(`${footerLogo} p`, {
  fontSize: "14px",
  marginBottom: "20px",
});

globalStyle(`${footerLogo} button`, {
  backgroundColor: "transparent",
  border: "1px solid #D4AF37",
  color: "#D4AF37",
  padding: "8px 16px",
  fontSize: "14px",
  cursor: "pointer",
  transition: "all 0.3s ease",
});

globalStyle(`${footerLogo} button:hover`, {
  backgroundColor: "#D4AF37",
  color: "#1A1A1A",
});

// 연락처 섹션 스타일
export const contactSection = style({
  width: "30%",
});

globalStyle(`${contactSection} h3`, {
  color: "#D4AF37",
  fontSize: "18px",
  marginBottom: "20px",
  fontWeight: "normal",
});

globalStyle(`${contactSection} ul`, {
  listStyle: "none",
  padding: 0,
  margin: 0,
});

globalStyle(`${contactSection} li`, {
  margin: "10px 0",
  fontSize: "14px",
});

globalStyle(`${contactSection} span`, {
  display: "block",
  color: "#FFFFFF",
  marginBottom: "5px",
});

// 카테고리 섹션 스타일
export const categorySection = style({
  width: "65%",
});

globalStyle(`${categorySection} h3`, {
  color: "#D4AF37",
  fontSize: "18px",
  marginBottom: "20px",
  fontWeight: "normal",
});

export const categoryGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
});

export const categoryItem = style({
  borderBottom: "1px solid #333",
  cursor: "pointer",
});

globalStyle(`${categoryItem} h4`, {
  color: "#A9A9A9",
  fontSize: "16px",
  fontWeight: "normal",
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 0",
});

globalStyle(`${categoryItem} h4 span`, {
  color: "#D4AF37",
});
