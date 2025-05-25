import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  background: "#fff",
  borderRadius: "16px",
  padding: "32px 28px 28px 28px",
  boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
  margin: "0 auto",
  maxWidth: "540px",
  minWidth: "340px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const modalTitle = style({
  fontSize: "2rem",
  fontWeight: 700,
  textAlign: "left",
  marginBottom: "24px",
  width: "100%",
});

export const label = style({
  fontWeight: 700,
  fontSize: "1.08rem",
  margin: "16px 0 8px 0",
  textAlign: "left",
  width: "100%",
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
});

export const imageGuide = style({
  fontSize: "0.98rem",
  color: "#888",
  margin: "4px 0 16px 0",
  width: "100%",
  textAlign: "left",
});

export const input = style({
  width: "100%",
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

export const inputGuide = style({
  fontSize: "0.95rem",
  color: "#888",
  margin: "-10px 0 16px 0",
  width: "100%",
  textAlign: "left",
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
  selectors: {
    "&:hover": {
      background: "#3a90eb",
    },
  },
});
