import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  background: "#fff",
  borderRadius: "16px",
  padding: "40px 32px 32px 32px",
  boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
  margin: "0 auto",
  maxWidth: "480px",
  minWidth: "360px",
  height: "70vh",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const modalTitle = style({
  fontSize: "2.4rem",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "8px",
});

export const modalDesc = style({
  fontSize: "1.1rem",
  color: "#888",
  textAlign: "center",
  marginBottom: "32px",
});

export const infoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "20px",
  width: "100%",
});

export const infoLabel = style({
  fontSize: "1.1rem",
  fontWeight: 600,
  textAlign: "left",
  marginBottom: "4px",
});

export const input = style({
  width: "90%",
  padding: "14px 16px",
  border: "1.5px solid #e5e7eb",
  borderRadius: "10px",
  background: "#f7f8fa",
  fontSize: "1rem",
  marginBottom: "8px",
  outline: "none",
  transition: "border 0.2s",
  selectors: {
    "&:focus": {
      border: "1.5px solid #3a90eb",
    },
  },
});

export const inputRow = style({
  display: "flex",
  gap: "10px",
  marginBottom: "8px",
});

export const infoAddButton = style({
  background: "#f7f8fa",
  border: "1.5px solid #e5e7eb",
  borderRadius: "8px",
  padding: "8px 0",
  cursor: "pointer",
  fontSize: "1rem",
  color: "#3a90eb",
  width: "100%",
  marginTop: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
  transition: "background 0.2s, border 0.2s",
  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      border: "1.5px solid #3a90eb",
    },
  },
});

export const fileInputWrapper = style({
  display: "flex",
  gap: "24px",
  width: "100%",
  margin: "16px 0 24px 0",
  justifyContent: "space-between",
});

export const fileInputBox = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#f7f8fa",
  border: "1.5px solid #e5e7eb",
  borderRadius: "10px",
  padding: "18px 0 12px 0",
  margin: "0 8px",
});

export const fileInputLabel = style({
  fontSize: "1rem",
  fontWeight: 600,
  marginBottom: "8px",
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
  selectors: {
    "&:hover": {
      background: "#3a90eb",
    },
  },
});
