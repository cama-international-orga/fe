import {
  irregularGrid,
  overlayText,
  productTitleContainer,
} from "./Page3.style.css";
import { useEffect, useState } from "react";
import { page4DummyProducts } from "./dummyProduct.ts";
import ProductItemCompany from "../../../components/IrregularGridCompany";

interface Product {
  id: number;
  name: string;
  image: string;
  gridArea: string;
  url: string;
}

const Page4 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isSmall, setIsSmall] = useState(() => window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth <= 1100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setProducts(
      page4DummyProducts.map((product) => ({ ...product, gridArea: product.gridArea }))
    );
  }, []);

  return (
    <div className={irregularGrid}>
      {/* 타이틀 — 데스크탑: 좌측 패널, 소형 화면: 최상단 (CSS order:-1) */}
      <div
        className={productTitleContainer}
        style={isSmall ? undefined : { gridArea: "1 / 1 / 7 / 3" }}
      >
        <h1 className={overlayText}>WITH</h1>
        <h1 className={overlayText}>OUR</h1>
        <h2 className={overlayText}>COMPANY</h2>
      </div>

      {products.map((product) => (
        <ProductItemCompany
          key={product.id}
          {...product}
          gridArea={isSmall ? (undefined as unknown as string) : product.gridArea}
        />
      ))}
    </div>
  );
};

export default Page4;
