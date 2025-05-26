import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  background: "#fff",
  borderRadius: "16px",
  padding: "32px 28px",
  boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
  margin: "0 auto",
  maxWidth: "400px",
  minWidth: "320px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const modalTitle = style({
  fontSize: "2rem",
  fontWeight: 700,
  textAlign: "start",
  marginBottom: "12px",
});

export const modalDesc = style({
  fontSize: "1.1rem",
  color: "#888",
  alignSelf: "flex-start",
  paddingLeft: "10px",
  textAlign: "start",
  marginBottom: "16px",
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
  selectors: {
    "&:focus": {
      border: "1.5px solid #3a90eb",
    },
  },
});

export const imageInput = style({
  width: "100%",
  height: "100%",
  marginTop: "20px",
  objectFit: "fill",
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
  selectors: {
    "&:hover": {
      background: "#3a90eb",
    },
  },
});
