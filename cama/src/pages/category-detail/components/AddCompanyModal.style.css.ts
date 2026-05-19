import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  background: "#fff",
  borderRadius: "16px",
  padding: "32px 28px",
  boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
  margin: "0 auto",
  width: "clamp(280px, 90vw, 400px)",
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
      width: "440px",
      padding: "34px 30px",
    },
    "(min-width: 1440px)": {
      width: "480px",
      padding: "36px 32px",
      borderRadius: "18px",
    },
    "(min-width: 1920px)": {
      width: "540px",
      padding: "40px 36px",
      borderRadius: "20px",
    },
    "(min-width: 2560px)": {
      width: "620px",
      padding: "48px 44px",
      borderRadius: "24px",
    },
  },
});

export const modalTitle = style({
  fontSize: "2rem",
  fontWeight: 700,
  textAlign: "start",
  marginBottom: "12px",

  "@media": {
    "(max-width: 767px)": {
      fontSize: "1.5rem",
      marginBottom: "10px",
    },
    "(min-width: 1280px)": { fontSize: "2.1rem" },
    "(min-width: 1440px)": {
      fontSize: "2.2rem",
      marginBottom: "14px",
    },
    "(min-width: 1920px)": {
      fontSize: "2.4rem",
      marginBottom: "16px",
    },
    "(min-width: 2560px)": {
      fontSize: "2.8rem",
      marginBottom: "20px",
    },
  },
});

export const modalDesc = style({
  fontSize: "1.1rem",
  color: "#888",
  alignSelf: "flex-start",
  paddingLeft: "10px",
  textAlign: "start",
  marginBottom: "16px",

  "@media": {
    "(max-width: 767px)": {
      fontSize: "0.95rem",
      marginBottom: "12px",
    },
    "(min-width: 1440px)": {
      fontSize: "1.15rem",
      marginBottom: "18px",
    },
    "(min-width: 1920px)": {
      fontSize: "1.2rem",
      marginBottom: "20px",
    },
    "(min-width: 2560px)": {
      fontSize: "1.35rem",
      marginBottom: "24px",
    },
  },
});

export const form = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const infoLabel = style({
  fontSize: "1.1rem",
  fontWeight: 600,
  textAlign: "left",
  alignSelf: "start",
  marginBottom: "4px",

  "@media": {
    "(max-width: 767px)": { fontSize: "0.95rem" },
    "(min-width: 1440px)": { fontSize: "1.15rem" },
    "(min-width: 1920px)": { fontSize: "1.22rem" },
    "(min-width: 2560px)": { fontSize: "1.38rem" },
  },
});

export const input = style({
  width: "90%",
  padding: "14px 16px",
  border: "1.5px solid #e5e7eb",
  borderRadius: "10px",
  background: "#f7f8fa",
  fontSize: "1rem",
  marginBottom: "16px",
  outline: "none",
  transition: "border 0.2s",

  "@media": {
    "(max-width: 767px)": {
      width: "100%",
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

export const imageInput = style({
  width: "100%",
  height: "100%",
  marginTop: "20px",
  objectFit: "fill",
});

export const fileInput = style({
  display: "none",
});

export const fileInputLabel = style({
  width: "100%",
  height: "120px",
  border: "2px solid #e5e7eb",
  background: "#f7f8fa",
  color: "#888",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  marginBottom: "16px",
  transition: "border-color 0.2s, background-color 0.2s",

  "@media": {
    "(max-width: 767px)": { height: "90px" },
    "(min-width: 1440px)": { height: "140px" },
    "(min-width: 1920px)": { height: "160px" },
    "(min-width: 2560px)": { height: "190px" },
  },

  selectors: {
    "&:hover": {
      borderColor: "#3a90eb",
      backgroundColor: "#f8fafc",
    },
  },
});

export const imagePreview = style({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  background: "#f7f8fa",
  borderRadius: "8px",
});

export const addButton = style({
  width: "100%",
  background: "#222831",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  padding: "14px 0",
  fontSize: "1.1rem",
  fontWeight: 700,
  marginTop: "8px",
  cursor: "pointer",
  transition: "background 0.2s",

  "@media": {
    "(max-width: 767px)": {
      padding: "12px 0",
      fontSize: "1rem",
    },
    "(min-width: 1440px)": {
      padding: "16px 0",
      fontSize: "1.18rem",
    },
    "(min-width: 1920px)": {
      padding: "18px 0",
      fontSize: "1.28rem",
      borderRadius: "12px",
    },
    "(min-width: 2560px)": {
      padding: "22px 0",
      fontSize: "1.45rem",
      borderRadius: "14px",
    },
  },

  selectors: {
    "&:hover": { background: "#3a90eb" },
  },
});
