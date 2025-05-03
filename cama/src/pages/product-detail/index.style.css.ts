import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "32px 24px",
  margin: "90px auto",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "12px",
  color: "#888",
  fontSize: "0.95rem",
});

export const category = style({
  fontSize: "1.2rem",
  fontWeight: "700",
  marginBottom: "20px",
  color: "#222",
  textAlign: "left",
});

export const company = style({
  fontSize: "1.2rem",
  fontWeight: "700",
  marginBottom: "20px",
  color: "#222",
  textAlign: "left",
});
export const productName = style({
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "20px",
  color: "#222",
  textAlign: "left",
});

export const modelImages = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  gap: "12px",
  marginBottom: "24px",
});

export const modelImage = style({
  width: "60%",
  objectFit: "cover",
  borderRadius: "8px",
  border: "1px solid #eee",
  background: "#fafafa",
});

export const infoSection = style({
  marginBottom: "28px",
});

export const infoTable = style({
  width: "100%",
  border: "1px solid #eee",
  marginTop: "8px",
});

export const infoTableTh = style({
  background: "#f5f5f5",
  color: "#333",
  fontWeight: "500",
  padding: "8px 12px",
  textAlign: "left",
  width: "120px",
});

export const infoTableTd = style({
  padding: "8px 12px",
  color: "#444",
});

export const detailImagesSection = style({
  marginTop: "24px",
});

export const detailImages = style({
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
});

export const detailImage = style({
  width: "120px",
  height: "120px",
  objectFit: "cover",
  borderRadius: "8px",
  border: "1px solid #eee",
  background: "#fafafa",
});
