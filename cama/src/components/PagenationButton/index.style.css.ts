import { globalStyle, style } from "@vanilla-extract/css";

export const pageContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  paddingBottom: "100px",
});

export const pageButton = style({
  padding: "8px 16px",
  border: "1px solid #ddd",
  background: "#ffffff",
  cursor: "pointer",
  transition: "background-color 0.3s",
});
export const nextPageButton = style({
  padding: "8px 16px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  transition: "background-color 0.3s",
});
export const activePage = style({
  backgroundColor: "#f0f0f0",
  borderColor: "#999",
  fontWeight: "bold",
});

globalStyle(`${pageButton}:hover`, {
  background: "#ddd",
});
