import { style } from "@vanilla-extract/css";

export const adminLoginContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "20px",
  backgroundColor: "#f5f5f5",
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
});

export const passwordInput = style({
  width: "90%",
  padding: "12px",
  fontSize: "16px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  marginTop: "8px",
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
  ":hover": {
    backgroundColor: "#555",
  },
  ":disabled": {
    backgroundColor: "#999",
    cursor: "not-allowed",
  },
});

export const errorMessage = style({
  color: "red",
  fontSize: "14px",
  margin: "0",
});
