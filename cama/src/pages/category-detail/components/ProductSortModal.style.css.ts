import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  background: "#fff",
  borderRadius: "16px",
  padding: "32px",
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
      padding: "34px",
    },
    "(min-width: 1440px)": {
      width: "480px",
      padding: "36px",
      borderRadius: "18px",
    },
    "(min-width: 1920px)": {
      width: "540px",
      padding: "40px",
      borderRadius: "20px",
    },
    "(min-width: 2560px)": {
      width: "620px",
      padding: "48px",
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
  gap: "16px",
  width: "100%",

  "@media": {
    "(min-width: 1440px)": { gap: "18px" },
    "(min-width: 1920px)": { gap: "20px" },
    "(min-width: 2560px)": { gap: "24px" },
  },
});

export const infoLabel = style({
  fontSize: "1.2rem",
  fontWeight: 600,
  textAlign: "left",
  marginBottom: "8px",

  "@media": {
    "(max-width: 767px)": { fontSize: "1rem" },
    "(min-width: 1440px)": { fontSize: "1.28rem" },
    "(min-width: 1920px)": { fontSize: "1.38rem" },
    "(min-width: 2560px)": { fontSize: "1.55rem" },
  },
});

export const infoLabelDetail = style({
  fontSize: "1rem",
  color: "#666",
  textAlign: "left",
  marginBottom: "16px",

  "@media": {
    "(max-width: 767px)": { fontSize: "0.88rem" },
    "(min-width: 1440px)": { fontSize: "1.05rem" },
    "(min-width: 1920px)": { fontSize: "1.12rem" },
    "(min-width: 2560px)": { fontSize: "1.25rem" },
  },
});

export const sortContainer = style({
  maxHeight: "500px",
  overflowY: "auto",
  marginBottom: "24px",
  width: "100%",

  "@media": {
    "(max-width: 767px)": {
      maxHeight: "380px",
      marginBottom: "18px",
    },
    "(min-width: 1440px)": {
      maxHeight: "560px",
      marginBottom: "28px",
    },
    "(min-width: 1920px)": {
      maxHeight: "620px",
      marginBottom: "32px",
    },
    "(min-width: 2560px)": {
      maxHeight: "720px",
      marginBottom: "40px",
    },
  },
});

export const sortItem = style({
  background: "#fff",
  borderRadius: "8px",
  marginBottom: "8px",
  border: "1px solid #e5e7eb",
  transition: "all 0.2s",
  cursor: "grab",

  "@media": {
    "(min-width: 1440px)": { borderRadius: "10px" },
    "(min-width: 2560px)": { borderRadius: "12px", marginBottom: "10px" },
  },

  selectors: {
    "&:last-child": { marginBottom: 0 },
    "&:active": { cursor: "grabbing" },
    "&:hover": {
      border: "1px solid #3a90eb",
      boxShadow: "0 2px 8px rgba(58, 144, 235, 0.1)",
    },
  },
});

export const sortItemContent = style({
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  gap: "12px",

  "@media": {
    "(max-width: 767px)": {
      padding: "10px 12px",
      gap: "10px",
    },
    "(min-width: 1440px)": {
      padding: "14px 18px",
      gap: "14px",
    },
    "(min-width: 1920px)": {
      padding: "16px 20px",
      gap: "16px",
    },
    "(min-width: 2560px)": {
      padding: "18px 24px",
      gap: "18px",
    },
  },
});

export const dragHandle = style({
  color: "#999",
  fontSize: "16px",
  fontWeight: "bold",
  padding: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "20px",
  userSelect: "none",

  "@media": {
    "(min-width: 1440px)": { fontSize: "18px" },
    "(min-width: 1920px)": { fontSize: "20px" },
    "(min-width: 2560px)": { fontSize: "24px" },
  },
});

export const sortItemImage = style({
  width: "40px",
  height: "40px",
  objectFit: "cover",
  borderRadius: "6px",
  border: "1px solid #e5e7eb",

  "@media": {
    "(max-width: 767px)": { width: "34px", height: "34px" },
    "(min-width: 1440px)": { width: "46px", height: "46px" },
    "(min-width: 1920px)": { width: "52px", height: "52px" },
    "(min-width: 2560px)": { width: "60px", height: "60px" },
  },
});

export const sortItemName = style({
  flex: 1,
  fontSize: "14px",
  fontWeight: 500,
  color: "#333",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  "@media": {
    "(max-width: 767px)": { fontSize: "13px" },
    "(min-width: 1440px)": { fontSize: "15px" },
    "(min-width: 1920px)": { fontSize: "16px" },
    "(min-width: 2560px)": { fontSize: "18px" },
  },
});

export const buttonContainer = style({
  display: "flex",
  gap: "12px",
  width: "100%",

  "@media": {
    "(min-width: 1440px)": { gap: "14px" },
    "(min-width: 1920px)": { gap: "16px" },
    "(min-width: 2560px)": { gap: "20px" },
  },
});

export const addButton = style({
  flex: 1,
  background: "#222831",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  padding: "16px 0",
  fontSize: "1.1rem",
  fontWeight: 700,
  cursor: "pointer",
  transition: "background 0.2s",

  "@media": {
    "(max-width: 767px)": {
      padding: "13px 0",
      fontSize: "1rem",
    },
    "(min-width: 1440px)": {
      padding: "18px 0",
      fontSize: "1.18rem",
    },
    "(min-width: 1920px)": {
      padding: "20px 0",
      fontSize: "1.28rem",
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

export const cancelButton = style({
  flex: 1,
  background: "#f7f8fa",
  color: "#666",
  border: "1.5px solid #e5e7eb",
  borderRadius: "10px",
  padding: "16px 0",
  fontSize: "1.1rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s",

  "@media": {
    "(max-width: 767px)": {
      padding: "13px 0",
      fontSize: "1rem",
    },
    "(min-width: 1440px)": {
      padding: "18px 0",
      fontSize: "1.18rem",
    },
    "(min-width: 1920px)": {
      padding: "20px 0",
      fontSize: "1.28rem",
      borderRadius: "12px",
    },
    "(min-width: 2560px)": {
      padding: "24px 0",
      fontSize: "1.45rem",
      borderRadius: "14px",
    },
  },

  selectors: {
    "&:hover": {
      background: "#e5e7eb",
      border: "1.5px solid #d1d5db",
    },
  },
});
