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
  width: "70%",
  gap: "12px",
  marginBottom: "24px",
});

export const modelImage = style({
  width: "60%",
  objectFit: "cover",
  border: "1px solid #eee",
  background: "#fafafa",
});
  
export const infoSection = style({
  marginBottom: "28px",
});

export const infoTitle = style({
  color: "#5b9bd5",
  fontSize: "1.5rem",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "20px",
});

export const infoTable = style({
  width: "100%",
  marginTop: "8px",
});

export const infoTableTh = style({
  color: "#333",
  fontWeight: "900",
  padding: "4px 8px",

  textAlign: "center",
  width: "120px",
});

export const infoTableTd = style({
  padding: "8px 12px",
  color: "#444",
});

export const detailImagesSection = style({
  width: "50%",
  marginTop: "24px",
});

export const detailImagesTitle = style({
  color: "#5b9bd5",
  fontSize: "1.5rem",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "20px",
});

export const detailImages = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  gap: "12px",
  width: "100%",
  aspectRatio: "1",
});

export const detailImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",

  border: "1px solid #eee",
  background: "#fafafa",
});
