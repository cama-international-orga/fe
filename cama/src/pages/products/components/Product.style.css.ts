import { style, globalStyle } from "@vanilla-extract/css";
// 제품 아이템 스타일
export const productItem = style({
  border: "1px solid #ddd",
  borderRadius: "4px",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

// 제품 이미지에 대한 글로벌 스타일
globalStyle(`${productItem} img`, {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  marginBottom: "8px",
});

// 제품 ID에 대한 글로벌 스타일
globalStyle(`${productItem} p`, {
  margin: "8px 0",
  color: "#666",
});

// 제품 삭제 버튼에 대한 글로벌 스타일
globalStyle(`${productItem} button`, {
  marginTop: "8px",
  padding: "8px 16px",
  background: "#333",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
});
