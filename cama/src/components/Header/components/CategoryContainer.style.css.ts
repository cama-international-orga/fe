import { style } from "@vanilla-extract/css";

export const navItemContainer = style({
  position: "relative", // display가 아니라 position!
  color: "#ffffff",
  fontSize: "1.5rem",
  padding: "0.75rem 1rem",
  textDecoration: "none",
  backgroundColor: "transparent", // none이 아니라 transparent
  border: "none",
  transition: "background-color 0.2s",
});

export const navItem = style({
  display: "flex", // 보통 flex를 많이 사용합니다
  alignItems: "center",
  color: "#ffffff",
  textDecoration: "none",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "1rem",
  transition: "background-color 0.2s",
});

export const deleteButton = style({
  position: "absolute", // display가 아니라 position!
  top: "-10px",
  right: "-10px",
  width: "1rem",
  height: "1rem",
  backgroundColor: "transparent",
  border: "none",
  transition: "background-color 0.2s",
  color: "red",
  cursor: "pointer",
  fontSize: "1.2rem",
  zIndex: 1, // 필요하다면 추가
});
