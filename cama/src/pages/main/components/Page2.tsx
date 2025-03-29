// components/Page2.tsx
import ProductItem from "../../../components/IrregularGridImage";
import {
  irregularGrid,
  overlayText,
  productTitleContainer,
} from "./Page2.style.css";

const Page2 = () => {
  const products = [
    {
      id: 1,
      name: "Door Handle",
      image: "/images/handle.jpg",
      gridArea: "1 / 2 / 2 / 3",
    },
    {
      id: 2,
      name: "Shower Drain",
      image: "/images/drain.jpg",
      gridArea: "1 / 3 / 2 / 5",
    },
    {
      id: 3,
      name: "Caster Wheel",
      image: "/images/wheel.jpg",
      gridArea: "1 / 5 / 3 / 6",
    },
    {
      id: 4,
      name: "Sliding Door",
      image: "/images/door.jpg",
      gridArea: "2 / 2 / 4 / 3",
    },
    {
      id: 5,
      name: "Cabinet Handle",
      image: "/images/cabinet.jpg",
      gridArea: "2 / 3 / 3 / 5",
    },
    {
      id: 6,
      name: "Towel Bar",
      image: "/images/towel.jpg",
      gridArea: "3 / 3 / 4 / 5",
    },
    {
      id: 7,
      name: "Test Product 1",
      image: "/images/test.jpg",
      gridArea: "3 / 5 / 4 / 5",
    },
  ];

  return (
    <div className={irregularGrid}>
      <div
        className={productTitleContainer}
        style={{ gridArea: "1 / 1 / 4 / 2" }}
      >
        <h1 className={overlayText}>OUR</h1>
        <h2 className={overlayText}>PRODUCTS</h2>
      </div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Page2;
