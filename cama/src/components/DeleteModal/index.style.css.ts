import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  background: "#fff",
  borderRadius: "14px",
  boxShadow: "0 4px 32px rgba(0,0,0,0.13)",
  width: "clamp(280px, 90vw, 400px)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  boxSizing: "border-box",

  "@media": {
    "(max-width: 767px)": {
      width: "calc(100vw - 32px)",
      borderRadius: "12px",
    },
    "(min-width: 1280px)": {
      width: "440px",
    },
    "(min-width: 1440px)": {
      width: "480px",
      borderRadius: "16px",
    },
    "(min-width: 1920px)": {
      width: "540px",
      borderRadius: "18px",
    },
    "(min-width: 2560px)": {
      width: "620px",
      borderRadius: "20px",
    },
  },
});

export const modalHeader = style({
  background: "#223046",
  color: "#fff",
  fontWeight: 700,
  fontSize: "1.18rem",
  padding: "18px 24px 16px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media": {
    "(max-width: 767px)": {
      fontSize: "1rem",
      padding: "14px 18px 12px",
    },
    "(min-width: 1440px)": {
      fontSize: "1.25rem",
      padding: "20px 28px 18px",
    },
    "(min-width: 1920px)": {
      fontSize: "1.35rem",
      padding: "24px 32px 22px",
    },
    "(min-width: 2560px)": {
      fontSize: "1.5rem",
      padding: "28px 36px 26px",
    },
  },
});

export const closeBtn = style({
  background: "none",
  border: "none",
  color: "#fff",
  fontSize: "1.5rem",
  cursor: "pointer",
  marginLeft: "8px",

  "@media": {
    "(min-width: 1920px)": { fontSize: "1.7rem" },
    "(min-width: 2560px)": { fontSize: "2rem" },
  },
});

export const warningSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "32px 24px 8px 24px",
  textAlign: "center",

  "@media": {
    "(max-width: 767px)": {
      padding: "24px 18px 6px",
    },
    "(min-width: 1440px)": {
      padding: "36px 28px 10px",
    },
    "(min-width: 1920px)": {
      padding: "40px 32px 12px",
    },
    "(min-width: 2560px)": {
      padding: "48px 40px 16px",
    },
  },
});

export const warningIcon = style({
  fontSize: "2.5rem",
  color: "#ff4d4f",
  marginBottom: "10px",

  "@media": {
    "(min-width: 1440px)": { fontSize: "2.8rem" },
    "(min-width: 1920px)": { fontSize: "3.2rem" },
    "(min-width: 2560px)": { fontSize: "3.8rem" },
  },
});

export const warningTitle = style({
  fontWeight: 700,
  fontSize: "1.15rem",
  color: "#222",
  marginBottom: "6px",

  "@media": {
    "(max-width: 767px)": { fontSize: "1rem" },
    "(min-width: 1440px)": { fontSize: "1.25rem" },
    "(min-width: 1920px)": { fontSize: "1.38rem" },
    "(min-width: 2560px)": { fontSize: "1.55rem" },
  },
});

export const warningDesc = style({
  color: "#666",
  fontSize: "0.98rem",
  marginBottom: "0",

  "@media": {
    "(max-width: 767px)": { fontSize: "0.88rem" },
    "(min-width: 1440px)": { fontSize: "1.05rem" },
    "(min-width: 1920px)": { fontSize: "1.12rem" },
    "(min-width: 2560px)": { fontSize: "1.25rem" },
  },
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
  width: "90%",
  padding: "20px 24px 24px 24px",

  "@media": {
    "(max-width: 767px)": {
      padding: "16px 18px 20px",
    },
    "(min-width: 1440px)": {
      padding: "22px 28px 28px",
      gap: "12px",
    },
    "(min-width: 1920px)": {
      padding: "26px 32px 32px",
      gap: "14px",
    },
    "(min-width: 2560px)": {
      padding: "30px 40px 40px",
      gap: "16px",
    },
  },
});

export const deleteButton = style({
  backgroundColor: "#e74c3c",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "10px 28px",
  fontWeight: 700,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background 0.2s",

  "@media": {
    "(max-width: 767px)": {
      padding: "9px 20px",
      fontSize: "0.9rem",
    },
    "(min-width: 1440px)": {
      padding: "12px 32px",
      fontSize: "1.08rem",
    },
    "(min-width: 1920px)": {
      padding: "14px 38px",
      fontSize: "1.15rem",
      borderRadius: "10px",
    },
    "(min-width: 2560px)": {
      padding: "16px 44px",
      fontSize: "1.3rem",
      borderRadius: "12px",
    },
  },

  selectors: {
    "&:hover": { background: "#c0392b" },
  },
});

export const cancelButton = style({
  background: "#f7f8fa",
  color: "#222",
  border: "1.5px solid #e5e7eb",
  borderRadius: "8px",
  padding: "10px 28px",
  fontWeight: 700,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background 0.2s, border 0.2s",

  "@media": {
    "(max-width: 767px)": {
      padding: "9px 20px",
      fontSize: "0.9rem",
    },
    "(min-width: 1440px)": {
      padding: "12px 32px",
      fontSize: "1.08rem",
    },
    "(min-width: 1920px)": {
      padding: "14px 38px",
      fontSize: "1.15rem",
      borderRadius: "10px",
    },
    "(min-width: 2560px)": {
      padding: "16px 44px",
      fontSize: "1.3rem",
      borderRadius: "12px",
    },
  },

  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      border: "1.5px solid #3a90eb",
      color: "#3a90eb",
    },
  },
});
