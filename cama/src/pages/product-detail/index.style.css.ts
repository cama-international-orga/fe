import { style } from "@vanilla-extract/css";

export const wrapper = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 24px 60px",
    margin: "80px auto 0",
    width: "100%",
    maxWidth: "1400px",
    boxSizing: "border-box",

    "@media": {
        "(max-width: 767px)": {
            padding: "16px 16px 40px",
            margin: "70px auto 0",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            padding: "20px 20px 48px",
            margin: "80px auto 0",
            maxWidth: "100%",
        },
        "(min-width: 1440px)": {
            padding: "28px 32px 72px",
            maxWidth: "1600px",
        },
        "(min-width: 1920px)": {
            padding: "36px 40px 80px",
            maxWidth: "1800px",
        },
        "(min-width: 2560px)": {
            padding: "44px 48px 96px",
            maxWidth: "2200px",
        },
    },
});

export const header = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "12px",
    width: "100%",
});

export const category = style({
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#222",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
});

export const company = style({
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: "16px",
    color: "#222",
    textAlign: "center",
});

export const productName = style({
    fontSize: "clamp(1.3rem, 1.8vw, 2.2rem)",
    fontWeight: 700,
    marginTop: "8px",
    marginBottom: "10px",
    color: "#1a1a1a",
    textAlign: "center",
    letterSpacing: "0.5px",

    "@media": {
        "(max-width: 767px)": {
            fontSize: "clamp(1.2rem, 5vw, 1.8rem)",
            marginTop: "6px",
            marginBottom: "8px",
        },
        "(min-width: 1920px)": {
            fontSize: "clamp(1.6rem, 1.8vw, 2.6rem)",
        },
        "(min-width: 2560px)": {
            fontSize: "clamp(1.8rem, 1.8vw, 3rem)",
        },
    },
});

export const categoryDetail = style({
    fontSize: "clamp(0.78rem, 0.9vw, 0.95rem)",
    fontWeight: 500,
    marginTop: "0",
    marginBottom: "20px",
    color: "#a0a0a0",
    textAlign: "center",
    letterSpacing: "1px",
    textTransform: "uppercase",

    "@media": {
        "(max-width: 767px)": {
            fontSize: "0.78rem",
            marginBottom: "16px",
        },
    },
});

export const specDescription = style({
    fontStyle: "italic",
    fontSize: "clamp(0.72rem, 0.8vw, 0.85rem)",
    fontWeight: 400,
    marginBottom: "16px",
    color: "#a0a0a0",
    textAlign: "center",
});

export const modelImages = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
    gap: "12px",
    marginBottom: "24px",
});

/* 하단 detail/spec/install 섹션
   B2B 기준: 이미지 섹션은 전체 너비의 절반 이하, 글과의 비율이 자연스럽게 */
export const detailImagesSection = style({
    width: "100%",
    maxWidth: "580px",
    marginTop: "16px",
    boxSizing: "border-box",

    "@media": {
        "(max-width: 767px)": {
            maxWidth: "100%",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            maxWidth: "520px",
        },
        "(min-width: 1440px)": {
            maxWidth: "640px",
        },
        "(min-width: 1920px)": {
            maxWidth: "720px",
        },
        "(min-width: 2560px)": {
            maxWidth: "820px",
        },
    },
});

export const detailImagesTitle = style({
    marginTop: "56px",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#5b9bd5",
    fontSize: "clamp(0.85rem, 0.9vw, 1rem)",
    textAlign: "center",
    letterSpacing: "1px",

    "@media": {
        "(max-width: 767px)": {
            marginTop: "36px",
        },
    },
});

export const detailImages = style({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    width: "100%",

    "@media": {
        "(max-width: 767px)": {
            gap: "8px",
        },
    },
});

export const detailImage = style({
    width: "100%",
    height: "auto",
    display: "block",
    maxHeight: "420px",
    objectFit: "contain",
    border: "1px solid #ebebeb",
    background: "#fafafa",
    cursor: "pointer",
    transition: "border-color 0.2s",

    "@media": {
        "(max-width: 767px)": {
            maxHeight: "240px",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            maxHeight: "320px",
        },
        "(min-width: 1440px)": {
            maxHeight: "480px",
        },
        "(min-width: 1920px)": {
            maxHeight: "540px",
        },
        "(min-width: 2560px)": {
            maxHeight: "620px",
        },
    },

    selectors: {
        "&:hover": {
            borderColor: "#bbb",
        },
    },
});

/* 이미지(좌) + 정보테이블(우) 2열 레이아웃
   - 데스크탑: 가로 배치 (45% : 55%)
   - 모바일: 세로 배치 (이미지 위, 정보 아래) */
export const productContainer = style({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    gap: "40px",
    boxSizing: "border-box",
    marginTop: "8px",

    "@media": {
        "(max-width: 767px)": {
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            gap: "28px",
        },
        "(min-width: 1440px)": {
            gap: "52px",
        },
        "(min-width: 1920px)": {
            gap: "64px",
        },
        "(min-width: 2560px)": {
            gap: "80px",
        },
    },
});

/* 왼쪽 이미지 섹션 */
export const imageSection = style({
    flex: "0 0 44%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: 0,

    "@media": {
        "(max-width: 767px)": {
            flex: "none",
            width: "100%",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            flex: "0 0 42%",
        },
        "(min-width: 1440px)": {
            flex: "0 0 43%",
        },
    },
});

/* 메인 상품 이미지 영역 — B2B 기준 적정 크기 */
export const mainImageWrapper = style({
    width: "100%",
    height: "clamp(220px, 24vw, 400px)",
    marginBottom: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    border: "1px solid #ebebeb",
    background: "#fafafa",

    "@media": {
        "(max-width: 767px)": {
            height: "clamp(200px, 52vw, 320px)",
        },
        "(min-width: 768px) and (max-width: 1023px)": {
            height: "clamp(220px, 28vw, 360px)",
        },
        "(min-width: 1440px)": {
            height: "clamp(280px, 24vw, 460px)",
        },
        "(min-width: 1920px)": {
            height: "clamp(320px, 22vw, 520px)",
        },
        "(min-width: 2560px)": {
            height: "clamp(380px, 20vw, 600px)",
        },
    },
});

export const mainImage = style({
    width: "100%",
    height: "100%",
    objectFit: "contain",
    cursor: "zoom-in",
});

export const thumbnailList = style({
    display: "flex",
    gap: "6px",
    marginTop: "8px",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",

    "@media": {
        "(min-width: 1920px)": {
            gap: "10px",
        },
    },
});

export const thumbnailImage = style({
    width: "clamp(52px, 5vw, 80px)",
    height: "clamp(52px, 5vw, 80px)",
    objectFit: "contain",
    cursor: "pointer",
    border: "1px solid #ddd",
    borderRadius: "3px",
    background: "#fafafa",
    transition: "border-color 0.2s, opacity 0.2s",

    "@media": {
        "(max-width: 767px)": {
            width: "clamp(48px, 12vw, 72px)",
            height: "clamp(48px, 12vw, 72px)",
        },
        "(min-width: 1920px)": {
            width: "clamp(64px, 5vw, 96px)",
            height: "clamp(64px, 5vw, 96px)",
        },
    },

    selectors: {
        "&:hover": {
            borderColor: "#555",
            opacity: 0.75,
        },
    },
});

/* 오른쪽 정보 섹션 */
export const infoSection = style({
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",

    "@media": {
        "(max-width: 767px)": {
            width: "100%",
            flex: "none",
        },
    },
});

export const infoTitle = style({
    marginBottom: "16px",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "#5b9bd5",
    fontSize: "clamp(0.85rem, 0.9vw, 1rem)",
    textAlign: "center",
    letterSpacing: "1px",
});

export const infoTable = style({
    width: "100%",
    borderCollapse: "collapse",
});

export const infoTableTh = style({
    textAlign: "center",
    padding: "12px 16px",
    borderRight: "1px solid #e8e8e8",
    borderTop: "1px solid #e8e8e8",
    borderBottom: "1px solid #e8e8e8",
    fontWeight: 500,
    color: "#333",
    width: "38%",
    fontSize: "clamp(0.78rem, 0.85vw, 0.9rem)",
    background: "#fafafa",

    "@media": {
        "(max-width: 767px)": {
            padding: "10px 12px",
            fontSize: "0.78rem",
        },
        "(min-width: 1440px)": {
            padding: "14px 18px",
            fontSize: "clamp(0.8rem, 0.85vw, 0.95rem)",
        },
        "(min-width: 1920px)": {
            padding: "16px 20px",
            fontSize: "clamp(0.85rem, 0.85vw, 1rem)",
        },
        "(min-width: 2560px)": {
            padding: "20px 24px",
            fontSize: "clamp(0.9rem, 0.85vw, 1.05rem)",
        },
    },
});

export const infoTableTd = style({
    textAlign: "center",
    padding: "12px 16px",
    borderTop: "1px solid #e8e8e8",
    borderBottom: "1px solid #e8e8e8",
    color: "#555",
    fontSize: "clamp(0.78rem, 0.85vw, 0.9rem)",

    "@media": {
        "(max-width: 767px)": {
            padding: "10px 12px",
            fontSize: "0.78rem",
        },
        "(min-width: 1440px)": {
            padding: "14px 18px",
            fontSize: "clamp(0.8rem, 0.85vw, 0.95rem)",
        },
        "(min-width: 1920px)": {
            padding: "16px 20px",
            fontSize: "clamp(0.85rem, 0.85vw, 1rem)",
        },
        "(min-width: 2560px)": {
            padding: "20px 24px",
            fontSize: "clamp(0.9rem, 0.85vw, 1.05rem)",
        },
    },
});
