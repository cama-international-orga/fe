import {style} from "@vanilla-extract/css";

export const sidebar = style({
    zIndex: 10,
    padding: "130px 16px 40px",
    borderRight: "1px solid #ebebeb",
    gap: "16px",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    width: "200px",
    flexShrink: 0,
    boxSizing: "border-box",
    overflowX: "hidden",

    "@media": {
        "(max-width: 767px)": {
            flexDirection: "row",
            width: "100%",
            padding: "8px 12px",
            borderRight: "none",
            borderBottom: "1px solid #ebebeb",
            overflowX: "auto",
            overflowY: "hidden",
            flexWrap: "nowrap",
            gap: "0",
            alignItems: "center",
            scrollbarWidth: "none",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            width: "180px",
            padding: "100px 14px 32px",
            gap: "12px",
        },
        "(min-width: 1024px) and (max-width: 1439px)": {
            width: "220px",
            padding: "120px 16px 40px",
            gap: "14px",
        },
        "(min-width: 1440px)": {
            width: "240px",
            padding: "130px 18px 40px",
            gap: "16px",
        },
        "(min-width: 1920px)": {
            width: "280px",
            padding: "130px 22px 40px",
            gap: "16px",
        },
        "(min-width: 2560px)": {
            width: "320px",
            padding: "130px 28px 40px",
            gap: "18px",
        },
    },
});

export const searchInputWrapper = style({
    display: "flex",
    alignItems: "center",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    padding: "6px 12px",
    width: "100%",
    backgroundColor: "#fafafa",
    boxSizing: "border-box",
    gap: "8px",
    flexShrink: 0,

    "@media": {
        "(max-width: 767px)": {
            display: "none",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            padding: "5px 10px",
        },
    },
});

export const searchInput = style({
    flex: 1,
    padding: "4px 0",
    border: "none",
    fontSize: "clamp(0.75rem, 0.85vw, 0.875rem)",
    outline: "none",
    backgroundColor: "transparent",
    width: "100%",
    selectors: {
        "&::placeholder": {
            color: "#bbb",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
        },
    },
});

export const searchIcon = style({
    color: "#bbb",
    flexShrink: 0,
    pointerEvents: "none",
});

export const navList = style({
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "2px",

    "@media": {
        "(max-width: 767px)": {
            flexDirection: "row",
            gap: "0",
            alignItems: "center",
            flexWrap: "nowrap",
        },
    },
});

export const navItem = style({
    fontSize: "clamp(0.75rem, 0.9vw, 0.9rem)",
    fontWeight: 600,
    color: "#666",
    padding: "10px 0",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "color 0.2s",
    selectors: {
        "&:hover": {
            color: "#333",
        },
    },
});

export const sidebarBtn = style({
    color: "#2c2c2c",
    background: "none",
    border: "none",
    outline: "none",
    cursor: "pointer",
    textAlign: "left",
    padding: "8px 14px",
    fontWeight: 700,
    fontSize: "clamp(0.72rem, 0.82vw, 0.875rem)",
    letterSpacing: "0.3px",
    display: "flex",
    alignItems: "flex-start",
    gap: "6px",
    width: "100%",
    textTransform: "uppercase",
    transition: "color 0.2s",
    wordBreak: "keep-all",
    overflowWrap: "break-word",

    "@media": {
        "(max-width: 767px)": {
            width: "auto",
            padding: "6px 10px",
            fontSize: "0.72rem",
            whiteSpace: "nowrap",
            wordBreak: "normal",
            overflowWrap: "normal",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            padding: "7px 10px",
            fontSize: "0.75rem",
        },
    },
});

export const sidebarBtnInactive = style({
    color: "#888",
    background: "none",
    textAlign: "left",
    border: "none",
    outline: "none",
    cursor: "pointer",
    padding: "8px 14px",
    fontWeight: 500,
    fontSize: "clamp(0.72rem, 0.82vw, 0.875rem)",
    letterSpacing: "0.3px",
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    textTransform: "uppercase",
    transition: "color 0.2s",
    wordBreak: "keep-all",
    overflowWrap: "break-word",
    selectors: {
        "&:hover": {
            color: "#3a90eb",
        },
    },

    "@media": {
        "(max-width: 767px)": {
            width: "auto",
            padding: "6px 10px",
            fontSize: "0.72rem",
            whiteSpace: "nowrap",
            wordBreak: "normal",
            overflowWrap: "normal",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            padding: "7px 10px",
            fontSize: "0.75rem",
        },
    },
});
