import { style } from "@vanilla-extract/css";

export const input = style({
  width: "100%",
  height: "100%",
  fontSize: "20px",
  fontWeight: "bold",
  color: "black",
  textAlign: "center",
  border: "1px solid #ccc",
});

export const imageInput = style({
  width: "100%",
  height: "100%",
  marginTop: "20px",
  objectFit: "fill",
});

export const addButton = style({
  marginTop: "20px",
  width: "100%",
  height: "100%",
  objectFit: "fill",
  border: "1px solid #ccc",
});
