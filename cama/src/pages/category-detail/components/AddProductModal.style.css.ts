import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  background: "#fff",
  borderRadius: "16px",
  padding: "10px 32px 32px 32px",
  boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
  margin: "0 auto",
  width: "clamp(300px, 90vw, 480px)",
  height: "90vh",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",

  "@media": {
    "(max-width: 767px)": {
      width: "calc(100vw - 32px)",
      padding: "8px 16px 24px",
      borderRadius: "12px",
      height: "92vh",
    },
    "(min-width: 1280px)": {
      width: "520px",
      padding: "12px 34px 34px",
    },
    "(min-width: 1440px)": {
      width: "560px",
      padding: "12px 36px 36px",
      borderRadius: "18px",
    },
    "(min-width: 1920px)": {
      width: "640px",
      padding: "14px 40px 40px",
      borderRadius: "20px",
    },
    "(min-width: 2560px)": {
      width: "740px",
      padding: "16px 48px 48px",
      borderRadius: "24px",
    },
  },
});

export const modalTitle = style({
  fontSize: "2.4rem",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "8px",

  "@media": {
    "(max-width: 767px)": {
      fontSize: "1.7rem",
      marginBottom: "6px",
    },
    "(min-width: 1280px)": { fontSize: "2.5rem" },
    "(min-width: 1440px)": {
      fontSize: "2.6rem",
      marginBottom: "10px",
    },
    "(min-width: 1920px)": {
      fontSize: "2.8rem",
      marginBottom: "12px",
    },
    "(min-width: 2560px)": {
      fontSize: "3.2rem",
      marginBottom: "14px",
    },
  },
});

export const modalDesc = style({
  fontSize: "1.1rem",
  color: "#888",
  textAlign: "center",
  marginBottom: "32px",

  "@media": {
    "(max-width: 767px)": {
      fontSize: "0.9rem",
      marginBottom: "20px",
    },
    "(min-width: 1440px)": {
      fontSize: "1.15rem",
      marginBottom: "36px",
    },
    "(min-width: 1920px)": {
      fontSize: "1.22rem",
      marginBottom: "40px",
    },
    "(min-width: 2560px)": {
      fontSize: "1.38rem",
      marginBottom: "48px",
    },
  },
});

export const infoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "20px",
  width: "100%",

  "@media": {
    "(min-width: 1440px)": { gap: "10px", marginBottom: "22px" },
    "(min-width: 1920px)": { gap: "12px", marginBottom: "24px" },
    "(min-width: 2560px)": { gap: "14px", marginBottom: "28px" },
  },
});

export const infoLabel = style({
  fontSize: "1.1rem",
  fontWeight: 600,
  textAlign: "left",
  marginBottom: "4px",

  "@media": {
    "(max-width: 767px)": { fontSize: "0.95rem" },
    "(min-width: 1440px)": { fontSize: "1.15rem" },
    "(min-width: 1920px)": { fontSize: "1.22rem" },
    "(min-width: 2560px)": { fontSize: "1.38rem" },
  },
});

export const input = style({
  padding: "14px 16px",
  border: "1.5px solid #e5e7eb",
  borderRadius: "10px",
  background: "#f7f8fa",
  fontSize: "1rem",
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

export const inputRow = style({
  display: "flex",
  gap: "4px",
  marginBottom: "8px",

  "@media": {
    "(min-width: 1440px)": { gap: "6px" },
    "(min-width: 2560px)": { gap: "8px" },
  },
});

export const infoAddButton = style({
  background: "#f7f8fa",
  border: "1.5px solid #e5e7eb",
  borderRadius: "8px",
  padding: "8px 4px",
  cursor: "pointer",
  fontSize: "1rem",
  color: "#3a90eb",
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
  transition: "background 0.2s, border 0.2s",
  gap: "6px",

  "@media": {
    "(max-width: 767px)": { fontSize: "0.9rem" },
    "(min-width: 1440px)": { fontSize: "1.05rem", padding: "10px 4px" },
    "(min-width: 1920px)": { fontSize: "1.1rem", padding: "12px 4px" },
    "(min-width: 2560px)": { fontSize: "1.2rem", padding: "14px 4px" },
  },

  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      border: "1.5px solid #3a90eb",
    },
  },
});

export const fileInputWrapper = style({
  display: "flex",
  width: "100%",
  margin: "16px 0 24px 0",
  gap: "12px",
  justifyContent: "space-between",

  "@media": {
    "(max-width: 767px)": {
      flexDirection: "column",
      gap: "10px",
      margin: "12px 0 18px 0",
    },
    "(min-width: 1440px)": { gap: "14px", margin: "18px 0 28px 0" },
    "(min-width: 1920px)": { gap: "16px", margin: "20px 0 32px 0" },
    "(min-width: 2560px)": { gap: "20px", margin: "24px 0 36px 0" },
  },
});

export const fileInputBox = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#f7f8fa",
  border: "1.5px solid #e5e7eb",
  borderRadius: "10px",
  padding: "18px",

  "@media": {
    "(max-width: 767px)": { padding: "14px" },
    "(min-width: 1440px)": { padding: "20px", borderRadius: "12px" },
    "(min-width: 1920px)": { padding: "24px" },
    "(min-width: 2560px)": { padding: "28px", borderRadius: "14px" },
  },
});

export const fileInputLabel = style({
  fontSize: "1rem",
  fontWeight: 600,
  marginBottom: "8px",

  "@media": {
    "(max-width: 767px)": { fontSize: "0.9rem" },
    "(min-width: 1440px)": { fontSize: "1.05rem" },
    "(min-width: 1920px)": { fontSize: "1.12rem" },
    "(min-width: 2560px)": { fontSize: "1.25rem" },
  },
});

export const fileInput = style({
  display: "none",
});

export const fileInputButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff",
  border: "1.5px solid #e5e7eb",
  borderRadius: "8px",
  padding: "8px 24px",
  fontSize: "1rem",
  color: "#3a90eb",
  cursor: "pointer",
  fontWeight: 600,
  transition: "background 0.2s, border 0.2s",
  marginTop: "8px",
  gap: "8px",

  "@media": {
    "(max-width: 767px)": {
      padding: "7px 18px",
      fontSize: "0.9rem",
    },
    "(min-width: 1440px)": {
      padding: "10px 28px",
      fontSize: "1.05rem",
    },
    "(min-width: 1920px)": {
      padding: "11px 32px",
      fontSize: "1.1rem",
    },
    "(min-width: 2560px)": {
      padding: "13px 38px",
      fontSize: "1.22rem",
    },
  },

  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      border: "1.5px solid #3a90eb",
    },
  },
});

export const addButton = style({
  width: "100%",
  background: "#222831",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  padding: "18px 0",
  fontSize: "1.2rem",
  fontWeight: 700,
  marginTop: "32px",
  cursor: "pointer",
  transition: "background 0.2s",

  "@media": {
    "(max-width: 767px)": {
      padding: "14px 0",
      fontSize: "1rem",
      marginTop: "20px",
    },
    "(min-width: 1440px)": {
      padding: "20px 0",
      fontSize: "1.28rem",
      marginTop: "36px",
    },
    "(min-width: 1920px)": {
      padding: "22px 0",
      fontSize: "1.38rem",
      marginTop: "40px",
      borderRadius: "12px",
    },
    "(min-width: 2560px)": {
      padding: "26px 0",
      fontSize: "1.55rem",
      marginTop: "48px",
      borderRadius: "14px",
    },
  },

  selectors: {
    "&:hover": { background: "#3a90eb" },
  },
});

export const imagePreviewContainer = style({
  marginTop: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "@media": {
    "(min-width: 1440px)": { marginTop: "14px" },
    "(min-width: 1920px)": { marginTop: "16px" },
    "(min-width: 2560px)": { marginTop: "20px" },
  },
});

export const imagePreviewTitle = style({
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "8px",
  color: "#666",

  "@media": {
    "(min-width: 1440px)": { fontSize: "15px" },
    "(min-width: 1920px)": { fontSize: "16px" },
    "(min-width: 2560px)": { fontSize: "18px" },
  },
});

export const imagePreviewGrid = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",

  "@media": {
    "(min-width: 1440px)": { gap: "10px" },
    "(min-width: 1920px)": { gap: "12px" },
    "(min-width: 2560px)": { gap: "14px" },
  },
});

export const imagePreviewItem = style({
  position: "relative",
  display: "inline-block",
});

export const imagePreview = style({
  width: "80px",
  height: "80px",
  objectFit: "cover",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",

  "@media": {
    "(max-width: 767px)": { width: "64px", height: "64px" },
    "(min-width: 1440px)": { width: "90px", height: "90px" },
    "(min-width: 1920px)": { width: "100px", height: "100px" },
    "(min-width: 2560px)": { width: "120px", height: "120px" },
  },
});

export const imageRemoveButton = style({
  position: "absolute",
  top: "-8px",
  right: "-8px",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  background: "#ef4444",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.2s",

  "@media": {
    "(min-width: 1920px)": { width: "24px", height: "24px", fontSize: "14px" },
    "(min-width: 2560px)": { width: "28px", height: "28px", fontSize: "16px" },
  },

  selectors: {
    "&:hover": { background: "#dc2626" },
  },
});
