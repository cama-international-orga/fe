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
  flex: 1,
  position: "absolute",
  right: 1,
  color: "red",

  cursor: "pointer",
});
