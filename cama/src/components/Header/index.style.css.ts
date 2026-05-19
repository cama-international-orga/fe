import { style } from "@vanilla-extract/css";

export const header = style({
  zIndex: 10,
  margin: "0 auto",
  top: 0,
  left: 0,
  width: "100%",
  backgroundColor: "#0f0f12",
  position: "absolute",
  height: "70px",

  "@media": {
    "(min-width: 1440px)": { height: "80px" },
    "(min-width: 1920px)": { height: "90px" },
    "(min-width: 2560px)": { height: "100px" },
  },
});

export const container = style({
  width: "100%",
  height: "100%",
  backgroundColor: "#ffffff00",
  display: "grid",
  /* 왼쪽(로고)과 오른쪽(QnA·검색)을 같은 너비로 고정해 nav를 정확히 중앙 배치 */
  gridTemplateColumns: "max(220px, 15vw) minmax(0, 1fr) max(220px, 15vw)",
  alignItems: "center",
  padding: "0 2rem",
  boxSizing: "border-box",

  "@media": {
    "(max-width: 768px)": {
      display: "flex",
      justifyContent: "space-between",
      padding: "0 1.25rem",
    },
  },
});

export const logoContainer = style({
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
});

export const logo = style({
  width: "clamp(100px, 12vw, 200px)",

  "@media": {
    "(max-width: 768px)": { width: "clamp(80px, 30vw, 140px)" },
    "(min-width: 1920px)": { width: "clamp(140px, 10vw, 220px)" },
    "(min-width: 2560px)": { width: "clamp(160px, 9vw, 260px)" },
  },
});

/* ── Desktop nav ──────────────────────────────────────── */

export const nav = style({
  /* grid 중간 칼럼이 크기를 결정하므로 flex 속성 불필요 */
  minWidth: 0,
  position: "relative",
  overflow: "visible",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "(max-width: 768px)": { display: "none" },
  },
});

export const navList = style({
  listStyleType: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",
  flexWrap: "nowrap",

  "@media": {
    "(min-width: 1920px)": { gap: "0.5rem" },
    "(min-width: 2560px)": { gap: "1rem" },
  },
});

/* Hidden measurement row – always renders all items to get natural widths */
export const measureContainer = style({
  position: "absolute",
  top: 0,
  left: 0,
  visibility: "hidden",
  pointerEvents: "none",
  display: "flex",
  height: 0,
  overflow: "hidden",
  zIndex: -1,
});

export const measureItem = style({
  fontSize: "0.9rem",
  padding: "0.75rem 1rem",
  whiteSpace: "nowrap",
  display: "inline-block",
  fontFamily: "inherit",
});

/* ── "•••" overflow button ────────────────────────────── */

export const moreButtonWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
});

export const moreButtonStyle = style({
  color: "#ffffff",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "0.85rem",
  padding: "0.75rem 0.75rem",
  letterSpacing: "2px",
  whiteSpace: "nowrap",
  selectors: {
    "&:hover": { color: "#aaa" },
  },
});

export const moreDropdown = style({
  position: "absolute",
  top: "100%",
  left: 0,
  background: "#0f0f12",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
  minWidth: "200px",
  zIndex: 1001,
  overflow: "visible",
});

export const moreDropdownItem = style({
  display: "block",
  padding: "10px 18px",
  color: "#fff",
  textDecoration: "none",
  fontSize: "0.85rem",
  fontWeight: "800",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
  selectors: {
    "&:last-child": { borderBottom: "none" },
    "&:hover": { background: "rgba(255,255,255,0.1)" },
  },
});

/* ── Q&A + Search (desktop) ───────────────────────────── */

export const qnaContainer = style({
  display: "flex",
  alignItems: "center",
  justifySelf: "end",
  gap: "20px",

  "@media": {
    "(max-width: 768px)": { display: "none" },
    "(min-width: 1920px)": { gap: "28px" },
    "(min-width: 2560px)": { gap: "36px" },
  },
});

export const qna = style({
  color: "#ffffff",
  fontSize: "0.7rem",
  letterSpacing: "0.07em",
  fontWeight: "500",
  cursor: "pointer",

  "@media": {
    "(min-width: 1920px)": { fontSize: "0.75rem" },
    "(min-width: 2560px)": { fontSize: "0.8rem" },
  },

  selectors: {
    "&:hover": { color: "#2563eb" },
  },
});

export const searchBoxContainer = style({
  borderBottom: "1px solid #fff",
  display: "flex",
  alignItems: "center",
  color: "#fff",
  width: "clamp(140px, 10vw, 220px)",
  padding: "10px 16px",

  "@media": {
    "(min-width: 1920px)": { width: "clamp(180px, 11vw, 260px)" },
    "(min-width: 2560px)": { width: "clamp(220px, 12vw, 320px)" },
  },
});

export const searchLabel = style({
  fontSize: "0.5rem",
  fontWeight: "normal",
  letterSpacing: "0.1em",
  opacity: "0.7",
});

export const searchIcon = style({
  color: "#ccc",
  textDecoration: "none",
  fontSize: "16px",
  cursor: "pointer",
  flexShrink: 0,
});

export const headerSearchInput = style({
  background: "transparent",
  border: "none",
  outline: "none",
  color: "#fff",
  fontSize: "0.65rem",
  letterSpacing: "0.1em",
  opacity: 0.7,
  width: "100%",
  fontFamily: "inherit",

  "@media": {
    "(min-width: 1920px)": { fontSize: "0.7rem" },
    "(min-width: 2560px)": { fontSize: "0.75rem" },
  },

  selectors: {
    "&::placeholder": {
      color: "#fff",
      opacity: 0.7,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
});

/* ── Hamburger button (mobile only) ──────────────────── */

export const hamburgerButton = style({
  display: "none",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "0.5rem",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,

  "@media": {
    "(max-width: 768px)": { display: "flex" },
  },
});

/* ── Mobile drawer ───────────────────────────────────── */

export const mobileOverlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 200,
  display: "flex",
  justifyContent: "flex-end",
});

export const mobileDrawer = style({
  width: "80%",
  maxWidth: "320px",
  height: "100%",
  backgroundColor: "#0f0f12",
  padding: "1.25rem 1.5rem",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
});

export const mobileCloseButton = style({
  alignSelf: "flex-end",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "0.25rem",
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const mobileNavItem = style({
  display: "block",
  padding: "1rem 0",
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "600",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
  selectors: {
    "&:hover": { color: "#aaa" },
  },
});

export const mobileQnaButton = style({
  display: "block",
  padding: "1rem 0",
  color: "#ffffff",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
  background: "transparent",
  border: "none",
  textAlign: "left",
  fontFamily: "inherit",
  width: "100%",
  borderBottomColor: "rgba(255,255,255,0.1)",
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  selectors: {
    "&:hover": { color: "#aaa" },
  },
});

export const mobileSearchBox = style({
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid rgba(255,255,255,0.3)",
  padding: "0.75rem 0",
  marginTop: "0.5rem",
  gap: "0.5rem",
});

export const mobileSearchInput = style({
  flex: 1,
  background: "transparent",
  border: "none",
  outline: "none",
  color: "#fff",
  fontSize: "0.85rem",
  fontFamily: "inherit",
  selectors: {
    "&::placeholder": {
      color: "rgba(255,255,255,0.5)",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
});

/* ── Mobile accordion ────────────────────────────────── */

export const mobileAccordionRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 0",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
  cursor: "pointer",
  gap: "8px",
});

export const mobileAccordionLabel = style({
  color: "#ffffff",
  fontSize: "1rem",
  fontWeight: "600",
  flex: 1,
  textAlign: "left",
  background: "transparent",
  border: "none",
  fontFamily: "inherit",
  letterSpacing: "0.03em",
  cursor: "pointer",
  padding: 0,
});

export const mobileAccordionChevron = style({
  color: "rgba(255,255,255,0.5)",
  fontSize: "0.65rem",
  flexShrink: 0,
  transition: "transform 0.2s",
  userSelect: "none",
});

export const mobileSubList = style({
  paddingLeft: "0.75rem",
  backgroundColor: "rgba(255,255,255,0.03)",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
});

export const mobileSubItem = style({
  display: "block",
  padding: "0.7rem 0.5rem",
  color: "rgba(255,255,255,0.7)",
  textDecoration: "none",
  fontSize: "0.88rem",
  fontWeight: "400",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  letterSpacing: "0.03em",
  selectors: {
    "&:hover": { color: "#fff" },
    "&:last-child": { borderBottom: "none" },
  },
});

export const mobileSubAddButton = style({
  display: "block",
  width: "100%",
  padding: "0.65rem 0.5rem",
  color: "#3a90eb",
  fontSize: "0.85rem",
  fontWeight: "500",
  background: "transparent",
  border: "none",
  textAlign: "left",
  fontFamily: "inherit",
  cursor: "pointer",
  letterSpacing: "0.03em",
  selectors: {
    "&:hover": { color: "#60a5fa" },
  },
});

export const mobileAdminButtonGroup = style({
  display: "flex",
  gap: "6px",
  alignItems: "center",
  flexShrink: 0,
});

export const mobileAdminEdit = style({
  background: "transparent",
  border: "1px solid rgba(58,144,235,0.5)",
  color: "#3a90eb",
  padding: "2px 8px",
  borderRadius: "4px",
  fontSize: "0.68rem",
  cursor: "pointer",
  fontFamily: "inherit",
  selectors: {
    "&:hover": { background: "rgba(58,144,235,0.15)" },
  },
});

export const mobileAdminDelete = style({
  background: "transparent",
  border: "1px solid rgba(255,77,79,0.5)",
  color: "#ff4d4f",
  padding: "2px 8px",
  borderRadius: "4px",
  fontSize: "0.68rem",
  cursor: "pointer",
  fontFamily: "inherit",
  selectors: {
    "&:hover": { background: "rgba(255,77,79,0.15)" },
  },
});

export const mobileSubItemRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  selectors: {
    "&:last-child": { borderBottom: "none" },
  },
});
