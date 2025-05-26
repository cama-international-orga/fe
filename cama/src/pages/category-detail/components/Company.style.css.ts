import { style } from "@vanilla-extract/css";

export const companyBar = style({
  display: "flex",
  position: "relative",
});

export const companyBtn = style({
  background: "#222831",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "8px 16px",
  fontWeight: 700,
  fontSize: "1rem",
  display: "flex",

  alignItems: "center",
  gap: "6px",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s",
  selectors: {
    "&:hover": {
      background: "#3a90eb",
      color: "#fff",
    },
  },
});

export const companyBtnInactive = style({
  background: "#f7f8fa",
  color: "#222831",
  border: "1.5px solid #e5e7eb",
  borderRadius: "8px",
  padding: "8px 16px",
  fontWeight: 500,
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s, border 0.2s",
  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      color: "#3a90eb",
      border: "1.5px solid #3a90eb",
    },
  },
});

export const deleteBtn = style({
  background: "transparent",
  color: "#ff4d4f",
  border: "none",
  borderRadius: "50%",
  width: "18px",
  height: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: "1rem",
  marginLeft: "4px",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s",
  selectors: {
    "&:hover": {
      background: "#ffeaea",
      color: "#d32f2f",
    },
  },
});
