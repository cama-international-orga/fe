import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  background: "#fff",
  borderRadius: "16px",
  padding: "32px 28px 28px 28px",
  boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
  margin: "0 auto",
  width: "clamp(300px, 90vw, 540px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",

  "@media": {
    "(max-width: 767px)": {
      width: "calc(100vw - 32px)",
      padding: "22px 16px 20px",
      borderRadius: "12px",
    },
    "(min-width: 1280px)": {
      width: "580px",
      padding: "34px 30px 30px",
    },
    "(min-width: 1440px)": {
      width: "620px",
      padding: "36px 32px 32px",
      borderRadius: "18px",
    },
    "(min-width: 1920px)": {
      width: "700px",
      padding: "40px 36px 36px",
      borderRadius: "20px",
    },
    "(min-width: 2560px)": {
      width: "800px",
      padding: "48px 44px 44px",
      borderRadius: "24px",
    },
  },
});

export const modalTitle = style({
  fontSize: "2rem",
  fontWeight: 700,
  textAlign: "left",
  marginBottom: "24px",
  width: "100%",

  "@media": {
    "(max-width: 767px)": {
      fontSize: "1.5rem",
      marginBottom: "18px",
    },
    "(min-width: 1280px)": {
      fontSize: "2.1rem",
    },
    "(min-width: 1440px)": {
      fontSize: "2.2rem",
      marginBottom: "26px",
    },
    "(min-width: 1920px)": {
      fontSize: "2.4rem",
      marginBottom: "30px",
    },
    "(min-width: 2560px)": {
      fontSize: "2.8rem",
      marginBottom: "36px",
    },
  },
});

export const label = style({
  fontWeight: 700,
  fontSize: "1.08rem",
  margin: "16px 0 8px 0",
  textAlign: "left",
  width: "100%",

  "@media": {
    "(max-width: 767px)": {
      fontSize: "0.95rem",
      margin: "12px 0 6px 0",
    },
    "(min-width: 1440px)": {
      fontSize: "1.12rem",
      margin: "18px 0 9px 0",
    },
    "(min-width: 1920px)": {
      fontSize: "1.2rem",
      margin: "20px 0 10px 0",
    },
    "(min-width: 2560px)": {
      fontSize: "1.35rem",
      margin: "24px 0 12px 0",
    },
  },
});

export const imageDropZone = style({
  width: "100%",
  minHeight: "160px",
  border: "2px dashed #d1d5db",
  borderRadius: "12px",
  background: "#f7f8fa",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#888",
  fontSize: "1.1rem",
  cursor: "pointer",
  marginBottom: "8px",
  transition: "border 0.2s, background 0.2s",
  textAlign: "center",

  "@media": {
    "(max-width: 767px)": {
      minHeight: "120px",
      fontSize: "0.95rem",
    },
    "(min-width: 1440px)": {
      minHeight: "180px",
      fontSize: "1.15rem",
    },
    "(min-width: 1920px)": {
      minHeight: "200px",
      fontSize: "1.2rem",
    },
    "(min-width: 2560px)": {
      minHeight: "240px",
      fontSize: "1.35rem",
    },
  },

  selectors: {
    "&:hover": {
      border: "2px solid #3a90eb",
      background: "#f0f6fd",
    },
  },
});

export const imageIcon = style({
  fontSize: "2.5rem",
  color: "#bdbdbd",
  marginBottom: "8px",

  "@media": {
    "(min-width: 1440px)": { fontSize: "2.8rem" },
    "(min-width: 1920px)": { fontSize: "3.2rem" },
    "(min-width: 2560px)": { fontSize: "3.8rem" },
  },
});

export const imagePreview = style({
  width: "100%",
  maxWidth: "420px",
  height: "120px",
  objectFit: "cover",
  borderRadius: "10px",
  background: "#f7f8fa",
  border: "1.5px solid #e5e7eb",
  marginBottom: "8px",
  cursor: "pointer",

  "@media": {
    "(max-width: 767px)": { height: "90px" },
    "(min-width: 1440px)": { height: "140px", maxWidth: "480px" },
    "(min-width: 1920px)": { height: "160px", maxWidth: "540px" },
    "(min-width: 2560px)": { height: "200px", maxWidth: "640px" },
  },
});

export const imageGuide = style({
  fontSize: "0.98rem",
  color: "#888",
  margin: "4px 0 16px 0",
  width: "100%",
  textAlign: "left",

  "@media": {
    "(max-width: 767px)": { fontSize: "0.85rem" },
    "(min-width: 1440px)": { fontSize: "1.02rem" },
    "(min-width: 1920px)": { fontSize: "1.08rem" },
    "(min-width: 2560px)": { fontSize: "1.2rem" },
  },
});

export const input = style({
  width: "100%",
  padding: "14px 16px",
  boxSizing: "border-box",
  border: "1.5px solid #e5e7eb",
  borderRadius: "10px",
  background: "#f7f8fa",
  fontSize: "1rem",
  marginBottom: "16px",
  outline: "none",
  transition: "border 0.2s",

  "@media": {
    "(max-width: 767px)": {
      padding: "11px 14px",
      fontSize: "0.9rem",
    },
    "(min-width: 1440px)": {
      padding: "15px 18px",
      fontSize: "1.05rem",
    },
    "(min-width: 1920px)": {
      padding: "17px 20px",
      fontSize: "1.1rem",
    },
    "(min-width: 2560px)": {
      padding: "20px 24px",
      fontSize: "1.2rem",
      borderRadius: "12px",
    },
  },

  selectors: {
    "&:focus": { border: "1.5px solid #3a90eb" },
  },
});

export const inputGuide = style({
  fontSize: "0.95rem",
  color: "#888",
  margin: "-10px 0 16px 0",
  width: "100%",
  textAlign: "left",

  "@media": {
    "(max-width: 767px)": { fontSize: "0.82rem" },
    "(min-width: 1440px)": { fontSize: "1rem" },
    "(min-width: 1920px)": { fontSize: "1.05rem" },
    "(min-width: 2560px)": { fontSize: "1.18rem" },
  },
});

export const addButton = style({
  width: "100%",
  background: "#222831",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  padding: "16px 0",
  fontSize: "1.15rem",
  fontWeight: 700,
  marginTop: "8px",
  cursor: "pointer",
  transition: "background 0.2s",

  "@media": {
    "(max-width: 767px)": {
      padding: "13px 0",
      fontSize: "1rem",
    },
    "(min-width: 1440px)": {
      padding: "18px 0",
      fontSize: "1.2rem",
    },
    "(min-width: 1920px)": {
      padding: "20px 0",
      fontSize: "1.3rem",
      borderRadius: "12px",
    },
    "(min-width: 2560px)": {
      padding: "24px 0",
      fontSize: "1.45rem",
      borderRadius: "14px",
    },
  },

  selectors: {
    "&:hover": { background: "#3a90eb" },
  },
});
