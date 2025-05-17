import { style } from "@vanilla-extract/css";

export const scrollContainer = style({
  width: "100vw",
  height: "500vh",
  position: "relative",
});

export const pageContainer = style({
  width: "100%",
  height: "100vh",
  scrollSnapAlign: "start",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const lastPageContainer = style({
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const paginationContainer = style({
  position: "fixed",
  right: "20px",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  zIndex: 100,
});

export const paginationDot = style({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  border: "2px solid rgba(255, 255, 255, 0.5)",
  cursor: "pointer",
  transition: "all 0.3s ease",
  margin: "8px 0",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

export const activeDot = style({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  transform: "scale(1.2)",
  boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
});

export const mediaStyle = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: `url('../../assets/png/main-page-thumbnail3.png') center/cover`,
  filter: "brightness(0.7)",
  objectFit: "cover",
});

export const textLayer = style({
  position: "relative",
  zIndex: 2,
  color: "white",
  textAlign: "center",
  fontSize: "4rem",
});
