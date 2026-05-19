import { style } from "@vanilla-extract/css";

export const irregularGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr 1fr",
  width: "100%",
  height: "100%",

  "@media": {
    "(max-width: 1100px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "min-content repeat(3, 1fr)",
    },
    "(max-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "min-content repeat(4, 1fr)",
    },
  },
});

export const productTitleContainer = style({
  backgroundColor: "#1A1A2E",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",

  "@media": {
    "(max-width: 1100px)": {
      flexDirection: "row",
      gap: "0.75rem",
      padding: "0.75rem 2rem",
      gridColumn: "1 / -1",
      minHeight: "70px",
    },
  },
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
  fontSize: "clamp(1rem, 1.5vw, 2rem)",
  fontWeight: "bold",
  textAlign: "center",
  transform: "translateY(20px)",
  transition: "transform 0.3s ease",

  "@media": {
    "(min-width: 1920px)": { fontSize: "clamp(1.2rem, 1.8vw, 2.5rem)" },
    "(min-width: 2560px)": { fontSize: "clamp(1.5rem, 2vw, 3rem)" },
  },

  selectors: {
    [`${imageItem}:hover &`]: {
      transform: "translateY(0)",
    },
  },
});
