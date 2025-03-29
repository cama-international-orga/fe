// components/Page2.style.css.ts
import { style } from "@vanilla-extract/css";

export const irregularGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  gridTemplateRows: "auto",
  width: "100%",
  height: "100%",
  margin: "0 auto",
  padding: "40px 0",
});

export const productTitleContainer = style({
  backgroundColor: "#1A1A2E", // 어두운 배경색
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
});

export const imageItem = style({
  position: "relative",
  overflow: "hidden",
  borderRadius: "2px",
  width: "100%",
  height: "100%",
});

export const itemImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",

  selectors: {
    [`${imageItem}:hover &`]: {
      transform: "scale(1.05)",
    },
  },
});

export const imageOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(3px) brightness(80%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",

  selectors: {
    [`${imageItem}:hover &`]: {
      opacity: 1,
    },
  },
});

export const overlayText = style({
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",

  transform: "translateY(20px)",
  transition: "transform 0.3s ease",

  selectors: {
    [`${imageItem}:hover &`]: {
      transform: "translateY(0)",
    },
  },
});
