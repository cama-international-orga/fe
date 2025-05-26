import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  background: "#fff",
  borderRadius: "14px",
  boxShadow: "0 4px 32px rgba(0,0,0,0.13)",
  minWidth: "340px",
  maxWidth: "400px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
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
});

export const closeBtn = style({
  background: "none",
  border: "none",
  color: "#fff",
  fontSize: "1.5rem",
  cursor: "pointer",
  marginLeft: "8px",
});

export const warningSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "32px 24px 8px 24px",
  textAlign: "center",
});

export const warningIcon = style({
  fontSize: "2.5rem",
  color: "#ff4d4f",
  marginBottom: "10px",
});

export const warningTitle = style({
  fontWeight: 700,
  fontSize: "1.15rem",
  color: "#222",
  marginBottom: "6px",
});

export const warningDesc = style({
  color: "#666",
  fontSize: "0.98rem",
  marginBottom: "0",
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
  width: "90%",
  padding: "20px 24px 24px 24px",
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
  selectors: {
    "&:hover": {
      background: "#c0392b",
    },
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
  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      border: "1.5px solid #3a90eb",
      color: "#3a90eb",
    },
  },
});
