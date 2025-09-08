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
});

export const modalContent = style({
  position: "relative",
  maxWidth: "90vw",
  maxHeight: "90vh",
  cursor: "default",
});

export const modalImage = style({
  maxWidth: "100%",
  maxHeight: "90vh",
  objectFit: "contain",
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

  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});
