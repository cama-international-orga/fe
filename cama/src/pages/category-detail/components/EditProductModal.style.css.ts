import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  background: "#fff",
  borderRadius: "16px",
  padding: "10px 32px 32px 32px",
  boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
  margin: "0 auto",
  maxWidth: "480px",
  minWidth: "360px",
  height: "90vh",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const modalTitle = style({
  fontSize: "2.4rem",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: "8px",
});

export const modalDesc = style({
  fontSize: "1.1rem",
  color: "#888",
  textAlign: "center",
  marginBottom: "32px",
});

export const infoContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "20px",
  width: "100%",
});

export const infoLabel = style({
  fontSize: "1.1rem",
  fontWeight: 600,
  textAlign: "left",
  marginBottom: "4px",
});

export const input = style({
  padding: "14px 16px",
  border: "1.5px solid #e5e7eb",
  borderRadius: "10px",
  background: "#f7f8fa",
  fontSize: "1rem",
  outline: "none",
  transition: "border 0.2s",
  selectors: {
    "&:focus": {
      border: "1.5px solid #3a90eb",
    },
  },
});

export const inputRow = style({
  display: "flex",
  gap: "4px",
  marginBottom: "8px",
});

export const infoAddButton = style({
  background: "#f7f8fa",
  border: "1.5px solid #e5e7eb",
  borderRadius: "8px",
  padding: "8px 4px",
  cursor: "pointer",
  fontSize: "1rem",
  color: "#3a90eb",
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
  transition: "background 0.2s, border 0.2s",
  gap: "6px",
  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      border: "1.5px solid #3a90eb",
    },
  },
});

export const fileInputWrapper = style({
  display: "flex",
  width: "100%",
  margin: "16px 0 24px 0",
  gap: "12px",
  justifyContent: "space-between",
});

export const fileInputBox = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#f7f8fa",
  border: "1.5px solid #e5e7eb",
  borderRadius: "10px",
  padding: "18px 0 12px 0",
});

export const fileInputLabel = style({
  fontSize: "1rem",
  fontWeight: 600,
  marginBottom: "8px",
});

export const fileInput = style({
  display: "none",
});

export const fileInputButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff",
  border: "1.5px solid #e5e7eb",
  borderRadius: "8px",
  padding: "8px 24px",
  fontSize: "1rem",
  color: "#3a90eb",
  cursor: "pointer",
  fontWeight: 600,
  transition: "background 0.2s, border 0.2s",
  marginTop: "8px",
  gap: "8px",
  selectors: {
    "&:hover": {
      background: "#eaf3fb",
      border: "1.5px solid #3a90eb",
    },
  },
});

export const addButton = style({
  width: "100%",
  background: "#222831",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  padding: "18px 0",
  fontSize: "1.2rem",
  fontWeight: 700,
  marginTop: "32px",
  cursor: "pointer",
  transition: "background 0.2s",
  selectors: {
    "&:hover": {
      background: "#3a90eb",
    },
  },
});

// Child element styles (vanilla-extract does not allow "& span" selectors)
export const buttonIcon = style({
  fontSize: "18px",
  lineHeight: 1,
  display: "inline-block",
});

// 이미지 미리보기 관련 스타일
export const imagePreviewContainer = style({
  marginTop: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const imagePreviewTitle = style({
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "8px",
  color: "#666",
});

export const imagePreviewGrid = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
});

export const imagePreviewItem = style({
  position: "relative",
  display: "inline-block",
});

export const imagePreview = style({
  width: "80px",
  height: "80px",
  objectFit: "cover",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
});

export const imageRemoveButton = style({
  position: "absolute",
  top: "-8px",
  right: "-8px",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  background: "#ef4444",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.2s",
  selectors: {
    "&:hover": {
      background: "#dc2626",
    },
  },
});
