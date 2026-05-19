import { style, globalStyle } from "@vanilla-extract/css";

export const footer = style({
  width: "100%",
  backgroundColor: "#1A1A1A",
  color: "#A9A9A9",
  padding: "60px 24px 40px",
  fontFamily: "Arial, sans-serif",
  boxSizing: "border-box",

  "@media": {
    "(max-width: 767px)": {
      padding: "40px 20px 32px",
    },
    "(min-width: 768px) and (max-width: 1023px)": {
      padding: "50px 24px 36px",
    },
    "(min-width: 1920px)": {
      padding: "70px 32px 50px",
    },
    "(min-width: 2560px)": {
      padding: "80px 40px 60px",
    },
  },
});

export const footerContainer = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0",

  "@media": {
    "(min-width: 1440px)": {
      maxWidth: "1400px",
    },
    "(min-width: 1920px)": {
      maxWidth: "1700px",
    },
    "(min-width: 2560px)": {
      maxWidth: "2200px",
    },
  },
});

export const footerContent = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginTop: "40px",
  gap: "32px",

  "@media": {
    "(max-width: 767px)": {
      flexDirection: "column",
      gap: "36px",
      marginTop: "28px",
    },
    "(min-width: 768px) and (max-width: 1023px)": {
      gap: "24px",
      marginTop: "32px",
    },
  },
});

export const footerLogo = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  borderBottom: "1px solid #333",
  paddingBottom: "30px",
  gap: "24px",

  "@media": {
    "(max-width: 767px)": {
      flexDirection: "column",
      gap: "20px",
      paddingBottom: "24px",
    },
    "(min-width: 768px) and (max-width: 1023px)": {
      gap: "20px",
      alignItems: "center",
    },
  },
});

export const catalogDownload = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  gap: "20px",
  flexShrink: 0,

  "@media": {
    "(max-width: 767px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "14px",
    },
    "(min-width: 768px) and (max-width: 1023px)": {
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "12px",
    },
  },
});

globalStyle(`${footerLogo} h2`, {
  color: "#FFFFFF",
  fontSize: "clamp(18px, 1.5vw, 28px)",
  marginBottom: "15px",
  fontWeight: "normal",
});

globalStyle(`${footerLogo} p`, {
  fontSize: "clamp(12px, 0.85vw, 16px)",
});

globalStyle(`${footerLogo} button`, {
  backgroundColor: "transparent",
  border: "1px solid #D4AF37",
  color: "#D4AF37",
  padding: "8px 16px",
  fontSize: "clamp(12px, 0.85vw, 16px)",
  cursor: "pointer",
  transition: "all 0.3s ease",
});

globalStyle(`${footerLogo} button:hover`, {
  backgroundColor: "#D4AF37",
  color: "#1A1A1A",
});

export const contactSection = style({
  width: "30%",

  "@media": {
    "(max-width: 767px)": {
      width: "100%",
    },
    "(min-width: 768px) and (max-width: 1023px)": {
      width: "100%",
    },
  },
});

globalStyle(`${contactSection} h3`, {
  color: "#D4AF37",
  fontSize: "clamp(14px, 1vw, 20px)",
  marginBottom: "20px",
  fontWeight: "normal",
});

globalStyle(`${contactSection} ul`, {
  listStyle: "none",
  padding: 0,
  margin: 0,
});

globalStyle(`${contactSection} li`, {
  margin: "10px 0",
  fontSize: "clamp(12px, 0.8vw, 16px)",
});

globalStyle(`${contactSection} span`, {
  display: "block",
  color: "#FFFFFF",
  marginBottom: "5px",
});

export const categorySection = style({
  width: "65%",

  "@media": {
    "(max-width: 767px)": {
      width: "100%",
    },
    "(min-width: 768px) and (max-width: 1023px)": {
      width: "100%",
    },
  },
});

globalStyle(`${categorySection} h3`, {
  color: "#D4AF37",
  fontSize: "clamp(14px, 1vw, 20px)",
  marginBottom: "20px",
  fontWeight: "normal",
});

export const categoryGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",

  "@media": {
    "(max-width: 479px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "14px",
    },
    "(min-width: 480px) and (max-width: 767px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "16px",
    },
    "(min-width: 768px) and (max-width: 1023px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
    },
    "(min-width: 1920px)": {
      gap: "28px",
    },
    "(min-width: 2560px)": {
      gap: "36px",
    },
  },
});

export const categoryItem = style({
  borderBottom: "1px solid #333",
  cursor: "pointer",
});

globalStyle(`${categoryItem} h4`, {
  color: "#A9A9A9",
  fontSize: "clamp(13px, 0.9vw, 18px)",
  fontWeight: "normal",
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 0",
});

globalStyle(`${categoryItem} h4 span`, {
  color: "#D4AF37",
});
