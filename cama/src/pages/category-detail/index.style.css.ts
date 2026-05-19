import { style } from "@vanilla-extract/css";

export const wrapper = style({
    display: "flex",
    marginTop: "100px",
    height: "auto",
    backgroundColor: "#ffffff",
    alignItems: "center",
});

export const mainWrapper = style({
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    minWidth: 0,
    width: "100%",
    marginBottom: "100px",

    "@media": {
        "(max-width: 767px)": {
            flexDirection: "column",
            marginBottom: "48px",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            marginBottom: "64px",
        },
        "(min-width: 1920px)": {
            marginBottom: "120px",
        },
        "(min-width: 2560px)": {
            marginBottom: "140px",
        },
    },
});

export const contentArea = style({
    flex: 1,
    padding: "16px 24px",
    minWidth: 0,

    "@media": {
        "(max-width: 767px)": {
            padding: "12px 16px",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            padding: "16px 20px",
        },
        "(min-width: 1024px) and (max-width: 1439px)": {
            padding: "18px 24px",
        },
        "(min-width: 1440px)": {
            padding: "20px 28px",
        },
        "(min-width: 1920px)": {
            padding: "24px 36px",
        },
        "(min-width: 2560px)": {
            padding: "32px 48px",
        },
    },
});

export const container = style({
    display: "flex",
    height: "auto",
    fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "1600px",
    margin: "0 auto",
    marginTop: "80px",
    boxSizing: "border-box",

    "@media": {
        "(max-width: 767px)": {
            marginTop: "80px",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            marginTop: "80px",
            maxWidth: "100%",
        },
        "(min-width: 1024px) and (max-width: 1439px)": {
            marginTop: "80px",
            maxWidth: "1400px",
        },
        "(min-width: 1440px)": {
            marginTop: "90px",
            maxWidth: "1800px",
        },
        "(min-width: 1920px)": {
            marginTop: "100px",
            maxWidth: "2000px",
        },
        "(min-width: 2560px)": {
            marginTop: "110px",
            maxWidth: "2400px",
        },
    },
});

export const titleContainer = style({
    fontSize: "clamp(0.85rem, 1.1vw, 1.4rem)",
    fontWeight: 700,
    textAlign: "left",
    width: "100%",
    display: "flex",
    backgroundColor: "#f1f1f1",
    color: "#8fa8d1",
    fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
    boxSizing: "border-box",
    letterSpacing: "0.8px",
    padding: "8px 20px",
    textTransform: "uppercase",

    "@media": {
        "(max-width: 767px)": {
            fontSize: "clamp(0.8rem, 3.5vw, 1rem)",
            padding: "6px 14px",
            letterSpacing: "0.5px",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            fontSize: "clamp(0.82rem, 1.2vw, 1.1rem)",
            padding: "7px 16px",
        },
        "(min-width: 1920px)": {
            fontSize: "clamp(1rem, 1.1vw, 1.6rem)",
            padding: "10px 24px",
        },
        "(min-width: 2560px)": {
            fontSize: "clamp(1.1rem, 1.1vw, 1.8rem)",
            padding: "12px 28px",
        },
    },
});

export const subTitleContainer = style({
    fontSize: "1.15rem",
    fontWeight: 600,
    textAlign: "left",
    marginTop: "50px",
    width: "100%",
    display: "flex",
});

export const cardContainer = style({
    background: "#fff",
    width: "100%",
    display: "flex",
    flexDirection: "column",
});

export const thumbnailContainer = style({
    width: "100%",
    borderRadius: "16px 16px 0 0",
    overflow: "hidden",
    position: "relative",
});

export const thumbnail = style({
    width: "100%",
    aspectRatio: "1920/430",
    objectFit: "cover",
    display: "block",
});

export const thumbnailModifyButton = style({
    position: "absolute",
    top: "12px",
    right: "16px",
    border: "1.5px solid #e5e7eb",
    background: "#fff",
    color: "#3a90eb",
    borderRadius: "8px",
    padding: "6px 18px",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s, border 0.2s",
    selectors: {
        "&:hover": {
            background: "#eaf3fb",
            color: "#2563eb",
            border: "1.5px solid #3a90eb",
        },
    },
});

/* company 탭 바 - 회사가 10개+ 일 때도 절대 잘리지 않도록
   모든 화면 크기에서 nowrap + 가로 스크롤 처리
   스크린 크기가 충분하면 스크롤바 미노출, 부족하면 자연스럽게 스크롤 */
export const companyBar = style({
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    scrollbarWidth: "none",
    width: "100%",
    gap: "0",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "20px 8px 8px",
    marginBottom: "16px",
    background: "#fff",
    borderBottom: "1px solid #ebebeb",
    minHeight: "52px",
    boxSizing: "border-box",

    "@media": {
        "(max-width: 767px)": {
            padding: "14px 4px 6px",
            marginBottom: "12px",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            padding: "18px 4px 8px",
            marginBottom: "14px",
        },
        "(min-width: 1440px)": {
            padding: "22px 8px 8px",
            marginBottom: "20px",
        },
        "(min-width: 1920px)": {
            padding: "26px 12px 10px",
            marginBottom: "24px",
        },
        "(min-width: 2560px)": {
            padding: "30px 16px 12px",
            marginBottom: "28px",
        },
    },
});

export const companyBtn = style({
    background: "#222831",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "9px 24px",
    fontWeight: 700,
    fontSize: "1.05rem",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
    selectors: {
        "&:hover": {
            background: "#3a90eb",
            color: "#fff",
        },
    },
});

export const companyBtnInactive = style({
    background: "#f7f8fa",
    color: "#222831",
    border: "1.5px solid #e5e7eb",
    fontWeight: 500,
    selectors: {
        "&:hover": {
            background: "#eaf3fb",
            color: "#3a90eb",
            border: "1.5px solid #3a90eb",
        },
    },
});

export const deleteBtn = style({
    background: "transparent",
    color: "#ff4d4f",
    border: "none",
    borderRadius: "50%",
    width: "22px",
    height: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "1.1rem",
    marginLeft: "4px",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
    selectors: {
        "&:hover": {
            background: "#ffeaea",
            color: "#d32f2f",
        },
    },
});

export const addCompanyButton = style({
    background: "#fff",
    color: "#3a90eb",
    border: "1.5px dashed #3a90eb",
    borderRadius: "8px",
    padding: "9px 22px",
    fontWeight: 700,
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s, border 0.2s",
    selectors: {
        "&:hover": {
            background: "#eaf3fb",
            color: "#2563eb",
            border: "1.5px solid #3a90eb",
        },
    },
});

export const productContainer = style({
    marginTop: "32px",
    width: "100%",

    "@media": {
        "(max-width: 767px)": {
            marginTop: "20px",
        },
        "(min-width: 1920px)": {
            marginTop: "40px",
        },
    },
});

/* 제품 그리드 - 화면 크기별 열 수
   모바일: 2열 / 태블릿: 3열 / 14인치: 4열 / 24인치: 5열 / 32인치: 6열 / 초대형: 7열 */
export const productGrid = style({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "12px",

    "@media": {
        "(min-width: 480px) and (max-width: 767px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "14px",
        },
        "(min-width: 1024px) and (max-width: 1439px)": {
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
        },
        "(min-width: 1440px)": {
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "18px",
        },
        "(min-width: 1920px)": {
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "20px",
        },
        "(min-width: 2560px)": {
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "24px",
        },
    },
});

export const productPlusButton = style({
    width: "70%",
    height: "70%",
    borderRadius: "16px",
    border: "2px dashed #bdbdbd",
    background: "#f7f8fa",
    color: "#bdbdbd",
    fontSize: "3.2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    margin: "0 auto",
    transition: "background 0.2s, border 0.2s, color 0.2s",
    selectors: {
        "&:hover": {
            background: "#eaf3fb",
            border: "2px solid #3a90eb",
            color: "#3a90eb",
        },
    },
});

export const productFlexContainer = style({
    flex: 1,
});

export const productSortContainer = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "24px",
    background: "#fff",
    borderRadius: "16px",

    "@media": {
        "(max-width: 767px)": {
            marginTop: "16px",
        },
    },
});
