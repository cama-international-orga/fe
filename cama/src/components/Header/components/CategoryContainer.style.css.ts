import { style, styleVariants} from "@vanilla-extract/css";

export const navItemContainer = style({
  position: "relative",
  color: "#ffffff",
  fontSize: "0.7rem",
  padding: "0.75rem 0.85rem",
  textDecoration: "none",
  backgroundColor: "transparent",
  border: "none",
  transition: "background-color 0.2s",
  letterSpacing: "0.07em",
});

export const navItem = style({
  display: "flex",
  alignItems: "center",
  color: "#ffffff",
  textDecoration: "none",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "0.7rem",
  letterSpacing: "0.07em",
  fontWeight: "500",
  transition: "color 0.2s",
  whiteSpace: "nowrap",
  selectors: {
    "&:hover": {
      color: "#cccccc",
    },
  },
});

export const deleteButton = style({
  position: "absolute",
  top: "-12px",
  right: "-12px",
  width: "24px",
  height: "24px",
  backgroundColor: "transparent",
  border: "none",
  transition: "background-color 0.2s",
  color: "red",
  cursor: "pointer",
  fontSize: "14px",
  zIndex: 1,
});

export const editButton = style({
  position: "absolute",
  top: "-12px",
  right: "4px",
  width: "24px",
  height: "24px",
  backgroundColor: "transparent",
  border: "none",
  transition: "background-color 0.2s",
  color: "#3a90eb",
  cursor: "pointer",
  fontSize: "1rem",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  selectors: {
    "&:hover": {
      color: "#2563eb",
    },
  },
});

export const buttonContainer = style({
  position: "absolute",
  right: "0px",
  display: "flex",
  gap: "8px",
  zIndex: 1,
});

export const buttonContainerDetail = style({
  position: "absolute",
  right: "0px",
  marginTop: "-15px",
  marginRight: "10px",
  display: "flex",
  gap: "8px",
  zIndex: 1,
});

//-----------------

export const dropdownMenu = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  background: '#3a3a3a',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '6px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
  minWidth: '220px',
  zIndex: 1000,
  transform: 'translateY(-6px)',
  transition: 'all 0.15s ease',
  display: 'none',
});

export const dropdownMenuVisible = styleVariants({
  true: {
    selectors: {
      '&': {
        opacity: 1,
        transform: 'translateY(0)',
        display: 'block',
      },
    },
  },
});

/* flyout: 왼쪽 방향 (•••  드롭다운 안에서 사용) */
export const dropdownMenuRight = style({
  position: 'absolute',
  top: 0,
  right: '100%',
  left: 'auto',
  background: '#3a3a3a',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '6px',
  boxShadow: '-4px 8px 24px rgba(0,0,0,0.4)',
  minWidth: '220px',
  zIndex: 1001,
  display: 'none',
});

export const dropdownMenuRightVisible = style({
  selectors: {
    '&': {
      display: 'block',
    },
  },
});

export const dropdownItem = style({
  display: 'block',
  padding: '9px 18px',
  fontFamily: "inherit",
  fontSize: "0.68rem",
  letterSpacing: "0.06em",
  fontWeight: "500",
  cursor: "pointer",
  borderBottom: '1px solid rgba(255,255,255,0.07)',
  color: '#e0e0e0',
  textDecoration: 'none',
  transition: 'background 0.15s, color 0.15s',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      background: 'rgba(255,255,255,0.08)',
      color: '#ffffff',
    },
  },
});
