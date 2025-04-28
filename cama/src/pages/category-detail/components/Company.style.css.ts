import { style } from "@vanilla-extract/css";

export const companyBar = style({
  display: "flex",
  position: "relative",
});

export const companyBtn = style({
  flex: 1,
  padding: "12px 0",
  border: "none",
  background: "#e5e5e5",
  color: "#333",
  fontSize: "1.1rem",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s",
});

export const companyBtnActive = style({
  background: "#222",
  color: "#fff",
});
export const deleteBtn = style({
  position: "absolute",
  top: 0,
  right: 0,
  background: "none",
  border: "none",
  color: "#ff0000",
  fontSize: "1.2rem",
  cursor: "pointer",
  marginLeft: "10px",
});
