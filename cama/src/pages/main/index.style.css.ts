import { style } from "@vanilla-extract/css";

export const scrollContainer = style({
  width: "100vw",
  height: "500vh",
  position: "relative",
});

export const pageContainer = style({
  width: "100vw",
  height: "100vh",
  scrollSnapAlign: "start", // 스크롤 스냅 포인트
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
});

export const activeDot = style({
  backgroundColor: "white",
  transform: "scale(1.2)",
});

export const mediaStyle = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: `url('your-image.jpg') center/cover`,
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
