// components/Page4.tsx
import ProductItem from "../../../components/IrregularGridImage";
import {
  irregularGrid,
  overlayText,
  productTitleContainer,
} from "./Page3.style.css";

const Page3 = () => {
  const products = [
    {
      id: 1,
      name: "Door Handle",
      image: "/images/handle.jpg",
      gridArea: "1 / 1 / 2 / 3",
    },
    {
      id: 2,
      name: "Shower Drain",
      image: "/images/drain.jpg",
      gridArea: "1 / 3 / 2 / 4",
    },
    {
      id: 3,
      name: "Caster Wheel",
      image: "/images/wheel.jpg",
      gridArea: "1 / 4 / 3 / 5",
    },
    {
      id: 4,
      name: "Sliding Door",
      image: "/images/door.jpg",
      gridArea: "2 / 1 / 5 / 2",
    },
    {
      id: 5,
      name: "Cabinet Handle",
      image: "/images/cabinet.jpg",
      gridArea: "2 / 2 / 3 / 4",
    },
    {
      id: 6,
      name: "Towel Bar",
      image: "/images/towel.jpg",
      gridArea: "3 / 2 / 5 / 5",
    },
  ];
  return (
    <div className={irregularGrid}>
      {/* 제품 이미지 섹션 */}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      {/* OUR PRODUCTS 타이틀 섹션 - 오른쪽에 배치 */}
      <div
        className={productTitleContainer}
        style={{ gridArea: "1 / 5 / 5 / 5" }}
      >
        <h1 className={overlayText}>OUR</h1>
        <h2 className={overlayText}>PRODUCTS</h2>
      </div>
    </div>
  );
};

export default Page3;
