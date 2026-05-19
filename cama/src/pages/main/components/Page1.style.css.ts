import { style } from "@vanilla-extract/css";

export const scrollIndicatorStyle = style({
  position: "absolute",
  bottom: "40px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",

  "@media": {
    "(min-width: 1920px)": {
      bottom: "50px",
    },
    "(min-width: 2560px)": {
      bottom: "60px",
    },
  },
});

export const mainText = style({
  color: "lightgray",
  fontSize: "clamp(3rem, 6vw, 9rem)",
  fontWeight: "bold",
  fontFamily: "'Literata', serif",
  textShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)",
  margin: "0 0 0.5rem 0",

  "@media": {
    "(min-width: 1920px)": {
      fontSize: "clamp(5rem, 6.5vw, 11rem)",
    },
    "(min-width: 2560px)": {
      fontSize: "clamp(6rem, 7vw, 14rem)",
    },
  },
});

export const subText = style({
  color: "lightgray",
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "clamp(1.2rem, 2vw, 3rem)",
  textShadow: "4px 4px 8px rgba(0, 0, 0, 0.4)",
  margin: 0,

  "@media": {
    "(min-width: 1920px)": {
      fontSize: "clamp(1.6rem, 2.2vw, 3.5rem)",
    },
    "(min-width: 2560px)": {
      fontSize: "clamp(2rem, 2.5vw, 4.5rem)",
    },
  },
});
