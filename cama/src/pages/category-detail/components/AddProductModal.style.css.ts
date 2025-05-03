import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  background: "#fff",
  borderRadius: "12px",
  padding: "32px 24px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
  margin: "0 auto",
});

export const modalTitle = style({
  fontSize: "1.3rem",
  fontWeight: 700,
  textAlign: "center",
});

export const infoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "20px",
});

export const infoLabel = style({
  fontSize: "1.3rem",
  fontWeight: 700,

  textAlign: "left",
});

export const inputRow = style({
  display: "flex",
  gap: "8px",
  marginBottom: "8px",
});

export const infoAddButton = style({
  background: "#eee",
  border: "none",
  borderRadius: "4px",
  padding: "4px 10px",
  cursor: "pointer",
  fontSize: "0.95rem",
  marginLeft: "8px",
});

export const fileInput = style({
  margin: "8px 0",
});
