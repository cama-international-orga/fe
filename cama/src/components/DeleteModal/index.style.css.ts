import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "20px",
});

export const deleteButton = style({
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "10px 20px",
});

export const cancelButton = style({
  color: "black",
  border: "1px solid black",
  padding: "10px 20px",
});
