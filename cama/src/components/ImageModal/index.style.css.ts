import { style } from "@vanilla-extract/css";

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  cursor: "pointer",
  padding: "20px",
  boxSizing: "border-box",

  "@media": {
    "(max-width: 767px)": { padding: "12px" },
  },
});

export const modalContent = style({
  position: "relative",
  maxWidth: "90vw",
  maxHeight: "90vh",
  cursor: "default",

  "@media": {
    "(max-width: 767px)": {
      maxWidth: "96vw",
      maxHeight: "88vh",
    },
    "(min-width: 1920px)": {
      maxWidth: "85vw",
      maxHeight: "88vh",
    },
    "(min-width: 2560px)": {
      maxWidth: "80vw",
      maxHeight: "86vh",
    },
  },
});

export const modalImage = style({
  maxWidth: "100%",
  maxHeight: "90vh",
  objectFit: "contain",

  "@media": {
    "(max-width: 767px)": { maxHeight: "85vh" },
    "(min-width: 1920px)": { maxHeight: "88vh" },
    "(min-width: 2560px)": { maxHeight: "86vh" },
  },
});

export const closeButton = style({
  position: "absolute",
  top: "-10px",
  right: "-10px",
  width: "40px",
  height: "40px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  border: "none",
  borderRadius: "50%",
  fontSize: "24px",
  fontWeight: "bold",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1001,
  color: "#333",

  "@media": {
    "(max-width: 767px)": {
      width: "32px",
      height: "32px",
      fontSize: "18px",
      top: "-8px",
      right: "-8px",
    },
    "(min-width: 1440px)": {
      width: "44px",
      height: "44px",
      fontSize: "26px",
    },
    "(min-width: 1920px)": {
      width: "50px",
      height: "50px",
      fontSize: "30px",
      top: "-14px",
      right: "-14px",
    },
    "(min-width: 2560px)": {
      width: "58px",
      height: "58px",
      fontSize: "34px",
      top: "-16px",
      right: "-16px",
    },
  },

  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});
