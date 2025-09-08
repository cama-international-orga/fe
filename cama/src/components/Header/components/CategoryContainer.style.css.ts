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
  top: "-12px",
  right: "-12px",
  width: "24px",
  height: "24px",
  backgroundColor: "transparent",
  border: "none",
  transition: "background-color 0.2s",
  color: "red",
  cursor: "pointer",
  fontSize: "14px",
  zIndex: 1, // 필요하다면 추가
});

export const editButton = style({
  position: "absolute",
  top: "-12px",
  right: "4px", // 삭제 버튼과 겹치지 않도록
  width: "24px",
  height: "24px",
  backgroundColor: "transparent",
  border: "none",
  transition: "background-color 0.2s",
  color: "#3a90eb",
  cursor: "pointer",
  fontSize: "1rem",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  selectors: {
    "&:hover": {
      color: "#2563eb",
    },
  },
});

export const buttonContainer = style({
  position: "absolute",

  right: "0px",
  display: "flex",
  gap: "8px",
  zIndex: 1,
});
