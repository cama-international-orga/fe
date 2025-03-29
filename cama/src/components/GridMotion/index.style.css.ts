// GridMotion.css.ts
import { style, globalStyle } from "@vanilla-extract/css";

export const noscroll = style({
  height: "100%",
  width: "100%",
  overflow: "hidden",
});

export const intro = style({
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: 'url("../../../assets/noise.png")',
    backgroundSize: "250px",
    pointerEvents: "none",
    zIndex: 4,
  },
});

export const gridMotionContainer = style({
  gap: "1rem",
  flex: "none",
  position: "relative",
  marginTop: "30vh",
  width: "150vw",
  height: "150vh",
  display: "grid",
  gridTemplateRows: "repeat(5, 1fr)",
  gridTemplateColumns: "100%",
  transform: "rotate(-10deg)",
  transformOrigin: "center center",
  zIndex: 2,
});

export const row = style({
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(5, 1fr)",
  willChange: "transform, filter",
});

export const rowItem = style({
  position: "relative",
});

export const rowItemInner = style({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: "10px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "1.5rem",
});

export const rowItemImg = style({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  backgroundColor: "white",
  position: "absolute",
  top: 0,
  left: 0,
});

export const rowItemContent = style({
  padding: "1rem",
  textAlign: "center",
  backgroundColor: "white",
  zIndex: 1,
});

export const fullview = style({
  position: "relative",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  pointerEvents: "none",
});

globalStyle(`${fullview} ${rowItemInner}`, {
  borderRadius: 0,
});
