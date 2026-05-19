import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  height: "auto",
  fontFamily: "Arial, sans-serif",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "1600px",
  margin: "0 auto",
  marginTop: "80px",
  boxSizing: "border-box",

  "@media": {
    "(max-width: 767px)": {
      marginTop: "70px",
      maxWidth: "100%",
    },
    "(min-width: 768px) and (max-width: 1023px)": {
      marginTop: "80px",
      maxWidth: "100%",
    },
    "(min-width: 1440px)": {
      marginTop: "90px",
      maxWidth: "1800px",
    },
    "(min-width: 1920px)": {
      marginTop: "100px",
      maxWidth: "2000px",
    },
  },
});

export const contentArea = style({
  flex: 1,
  padding: "20px",
  width: "100%",
  boxSizing: "border-box",

  "@media": {
    "(max-width: 767px)": {
      padding: "12px 14px",
    },
    "(min-width: 768px) and (max-width: 1023px)": {
      padding: "16px 18px",
    },
    "(min-width: 1440px)": {
      padding: "28px",
    },
    "(min-width: 1920px)": {
      padding: "36px",
    },
  },
});

export const titleContainer = style({
  fontSize: "clamp(0.85rem, 1.5vw, 1.8rem)",
  fontWeight: 700,
  textAlign: "left",
  width: "95%",
  display: "flex",
  backgroundColor: "#f1f1f1",
  color: "#8fa8d1",
  fontFamily: "Arial, sans-serif",
  boxSizing: "border-box",
  letterSpacing: "0.5px",
  padding: "6px 18px",
  marginBottom: "8px",

  "@media": {
    "(max-width: 767px)": {
      width: "100%",
      fontSize: "clamp(0.8rem, 3.5vw, 1rem)",
      padding: "5px 12px",
    },
  },
});

export const resultCount = style({
  fontSize: "0.9rem",
  color: "#999",
  marginBottom: "24px",
  paddingLeft: "4px",
});

export const productContainer = style({
  marginTop: "24px",
  width: "95%",

  "@media": {
    "(max-width: 767px)": {
      width: "100%",
      marginTop: "16px",
    },
  },
});

export const productGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "10px",

  "@media": {
    "(min-width: 480px) and (max-width: 767px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "10px",
    },
    "(min-width: 768px) and (max-width: 1023px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "12px",
    },
    "(min-width: 1024px) and (max-width: 1439px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "12px",
    },
    "(min-width: 1440px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "14px",
    },
    "(min-width: 1920px)": {
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "16px",
    },
    "(min-width: 2560px)": {
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "20px",
    },
  },
});

export const emptyState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 0",
  color: "#aaa",
  fontSize: "1rem",
  gap: "12px",
});

export const loadingState = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 0",
  color: "#aaa",
  fontSize: "1rem",
});
