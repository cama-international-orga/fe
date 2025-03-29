import { style } from "@vanilla-extract/css";

// index.style.css.ts에 추가
export const scrollIndicatorStyle = style({
  position: "absolute",
  bottom: "120px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

export const text = style({
  color: "white",
});
