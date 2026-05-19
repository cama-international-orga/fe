import { style, globalStyle } from "@vanilla-extract/css";

export const card = style({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
});

export const productItem = style({
    position: "relative",
    border: "1px solid #e0e0e0",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    cursor: "pointer",
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    transition: "box-shadow 0.2s, border-color 0.2s",

    ":hover": {
        boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
        borderColor: "#c0c0c0",
    },
});

globalStyle(`${productItem} img`, {
    width: "100%",
    aspectRatio: "1/1",
    height: "auto",
    objectFit: "contain",
    display: "block",
});

export const overlay = style({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.48)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.2s",
    zIndex: 2,
    fontSize: "0.95rem",
    fontWeight: 500,
    pointerEvents: "none",
});

export const showOverlay = style({
    opacity: 1,
    pointerEvents: "auto",
});

export const deleteBtn = style({
    color: "red",
    border: "none",
    background: "none",
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.2rem",
    fontWeight: 700,
    cursor: "pointer",
    transition: "color 0.2s",
    ":hover": {
        color: "#b30000",
    },
});

export const editBtn = style({
    position: "absolute",
    background: "none",
    top: "10px",
    right: "40px",
});

export const productNameContainer = style({
    fontSize: "clamp(0.72rem, 0.8vw, 0.825rem)",
    fontWeight: 600,
    color: "#444",
    letterSpacing: "0.2px",
    paddingLeft: "2px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",

    "@media": {
        "(max-width: 767px)": {
            fontSize: "0.72rem",
        },
    },
});
