import { style } from "@vanilla-extract/css";

export const modalContainer = style({
  background: "#fff",
  borderRadius: "16px",
  padding: "32px",
  boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
  margin: "0 auto",
  maxWidth: "400px",
  minWidth: "320px",
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
  gap: "16px",

  width: "100%",
});

export const infoLabel = style({
  fontSize: "1.2rem",
  fontWeight: 600,
  textAlign: "left",
  marginBottom: "8px",
});

export const infoLabelDetail = style({
  fontSize: "1rem",
  color: "#666",
  textAlign: "left",
  marginBottom: "16px",
});
export const sortContainer = style({
  maxHeight: "500px",
  overflowY: "auto",
  marginBottom: "24px",
});

export const sortItem = style({
  background: "#fff",
  borderRadius: "8px",
  marginBottom: "8px",
  border: "1px solid #e5e7eb",
  transition: "all 0.2s",
  cursor: "grab",
  selectors: {
    "&:last-child": {
      marginBottom: 0,
    },
    "&:active": {
      cursor: "grabbing",
    },
    "&:hover": {
      border: "1px solid #3a90eb",
      boxShadow: "0 2px 8px rgba(58, 144, 235, 0.1)",
    },
  },
});

export const sortItemContent = style({
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  gap: "12px",
});

export const dragHandle = style({
  color: "#999",
  fontSize: "16px",
  fontWeight: "bold",
  padding: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "20px",
  userSelect: "none",
});

export const sortItemImage = style({
  width: "40px",
  height: "40px",
  objectFit: "cover",
  borderRadius: "6px",
  border: "1px solid #e5e7eb",
});

export const sortItemName = style({
  flex: 1,
  fontSize: "14px",
  fontWeight: 500,
  color: "#333",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const buttonContainer = style({
  display: "flex",
  gap: "12px",
  width: "100%",
});

export const addButton = style({
  flex: 1,
  background: "#222831",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  padding: "16px 0",
  fontSize: "1.1rem",
  fontWeight: 700,
  cursor: "pointer",
  transition: "background 0.2s",
  selectors: {
    "&:hover": {
      background: "#3a90eb",
    },
  },
});

export const cancelButton = style({
  flex: 1,
  background: "#f7f8fa",
  color: "#666",
  border: "1.5px solid #e5e7eb",
  borderRadius: "10px",
  padding: "16px 0",
  fontSize: "1.1rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s",
  selectors: {
    "&:hover": {
      background: "#e5e7eb",
      border: "1.5px solid #d1d5db",
    },
  },
});
