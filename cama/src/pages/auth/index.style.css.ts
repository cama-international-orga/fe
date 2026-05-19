import { style } from "@vanilla-extract/css";

export const adminLoginContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "20px",
  backgroundColor: "#f5f5f5",

  "@media": {
    "(max-width: 767px)": {
      padding: "16px",
    },
    "(min-width: 1440px)": {
      padding: "24px",
    },
    "(min-width: 1920px)": {
      padding: "32px",
    },
    "(min-width: 2560px)": {
      padding: "40px",
    },
  },
});

export const loginForm = style({
  width: "100%",
  maxWidth: "400px",
  padding: "30px",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "20px",

  "@media": {
    "(max-width: 767px)": {
      maxWidth: "100%",
      padding: "22px 18px",
      borderRadius: "8px",
      gap: "16px",
    },
    "(min-width: 1280px)": {
      maxWidth: "440px",
      padding: "34px",
    },
    "(min-width: 1440px)": {
      maxWidth: "480px",
      padding: "38px",
      borderRadius: "10px",
      gap: "22px",
    },
    "(min-width: 1920px)": {
      maxWidth: "540px",
      padding: "44px",
      borderRadius: "12px",
      gap: "26px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    },
    "(min-width: 2560px)": {
      maxWidth: "640px",
      padding: "56px",
      borderRadius: "16px",
      gap: "32px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    },
  },
});

export const loginInput = style({
  width: "90%",
  padding: "12px",
  fontSize: "16px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  marginTop: "8px",

  "@media": {
    "(max-width: 767px)": {
      width: "100%",
      padding: "11px",
      fontSize: "14px",
      boxSizing: "border-box",
    },
    "(min-width: 1440px)": {
      padding: "14px 16px",
      fontSize: "17px",
      borderRadius: "6px",
    },
    "(min-width: 1920px)": {
      padding: "16px 18px",
      fontSize: "18px",
      borderRadius: "8px",
      marginTop: "10px",
    },
    "(min-width: 2560px)": {
      padding: "20px 22px",
      fontSize: "20px",
      borderRadius: "10px",
      marginTop: "12px",
    },
  },
});

export const loginButton = style({
  width: "100%",
  padding: "12px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background-color 0.3s",

  "@media": {
    "(max-width: 767px)": {
      padding: "13px",
      fontSize: "15px",
    },
    "(min-width: 1440px)": {
      padding: "14px",
      fontSize: "17px",
      borderRadius: "6px",
    },
    "(min-width: 1920px)": {
      padding: "16px",
      fontSize: "18px",
      borderRadius: "8px",
    },
    "(min-width: 2560px)": {
      padding: "20px",
      fontSize: "20px",
      borderRadius: "10px",
    },
  },

  ":hover": { backgroundColor: "#555" },
  ":disabled": {
    backgroundColor: "#999",
    cursor: "not-allowed",
  },
});

export const errorMessage = style({
  color: "red",
  fontSize: "14px",
  margin: "0",

  "@media": {
    "(min-width: 1440px)": { fontSize: "15px" },
    "(min-width: 1920px)": { fontSize: "16px" },
    "(min-width: 2560px)": { fontSize: "18px" },
  },
});
