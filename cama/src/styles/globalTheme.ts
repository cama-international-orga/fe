import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  colors: {
    primary: "#333",
    secondary: "#666",
    background: "#f5f5f5",
    border: "#ddd",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
  },
});
