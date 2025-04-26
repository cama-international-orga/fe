import { style } from "@vanilla-extract/css";

export const header = style({
  zIndex: 10,
  margin: "0 auto",
  top: 0, // 또는 원하는 위치
  left: 0, // 또는 원하는 위치
  width: "100%",
  backgroundColor: "#0f0f12",
  position: "absolute",
  height: "90px",
});

export const container = style({
  width: "90%",
  backgroundColor: "#ffffff00",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "center",
  alignContent: "center",
});

export const logoContainer = style({
  display: "flex",
  alignItems: "center",
  alignSelf: "center",
});

export const logo = style({
  width: "15vw",
});

export const mobileActions = style({
  display: "none",
});

export const nav = style({
  display: "block",
});

export const navList = style({
  listStyleType: "none",
  padding: 0,
  marginRight: "-8rem",
  display: "flex",
  alignItems: "center",
});



// .navItem:hover { background-color: #e9ecef; }
// 주석 처리된 hover 스타일은 필요 시 추가 가능

// export const desktopOnly = style({
//     display: "block",
// });
//
// export const desktopOnlyButton = style({
//     backgroundColor: "none",
//     border: "none",
// });

// Media Queries
// import { globalStyle } from "@vanilla-extract/css";
//
// globalStyle("@media (max-width: 768px)", {
//     [`.${mobileActions}`]: {
//         display: "flex",
//         alignItems: "center",
//     },
//
//     // [`.mobileButton`]: {
//     //     backgroundColor: "none",
//     //     border: "none",
//     //     cursor: "pointer",
//     //     padding: "0.5rem",
//     //     marginLeft: "0.5rem",
//     //     fontSize: "1.5rem", // 이모지 크기 조절
//     // },
//
//     [`.${nav}`]: {
//         display: "none",
//     },
//
//     [`.${navList}`]: {
//         flexDirection: "column",
//         alignItems: "flex-start",
//     },
//
//     [`.${navItem}`]: {
//         width: "100%",
//     },
//
//     [`.${userName}`]: {
//         display: "none",
//     }})
//
//     // [`.showMobileMenu`]: {ㄷ
//     //     display: "block",
//     //     position: "absolute",
//     //     top: "100%",
//     //     left: 0,
//     //     right: 0,
//     //     backgroundColor: "#ffffff", // 원래 주석 처리된 색상은 #f8f9fa
//     //     borderTop: "1px solid #e9ecef",
//     //     boxShadow: "0px,2px,4px rgba(0,0,0,.1)",
//     //
//     // }})
