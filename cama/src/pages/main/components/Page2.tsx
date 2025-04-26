// components/Page2.tsx
import ProductItem from "../../../components/IrregularGridImage";
import {
  irregularGrid,
  overlayText,
  productTitleContainer,
} from "./Page2.style.css";
import { useEffect, useState } from "react";
import { publicInstance } from "../../../apis/axios"; // API 호출 관련 임포트
import { page2DummyProducts } from "./dummyProduct";
// gridArea 레이아웃 설정을 상수로 정의
const GRID_AREAS = [
  "1 / 2 / 2 / 3",
  "1 / 3 / 2 / 5",
  "1 / 5 / 3 / 6",
  "2 / 2 / 4 / 3",
  "2 / 3 / 3 / 5",
  "3 / 3 / 4 / 5",
  "3 / 5 / 4 / 5",
];

// 제품 타입 정의
interface Product {
  id: number;
  name: string;
  image: string;
  gridArea: string;
}

const Page2 = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // API에서 제품 데이터 가져오기
    const fetchProducts = async () => {
      try {
        const response = await publicInstance.get("/products/featured/page2");

        // API 응답에서 받은 데이터에 gridArea 매핑
        const productsWithGrid = response.data.map(
          (product: Product, index: number) => ({
            ...product,
            gridArea: index < GRID_AREAS.length ? GRID_AREAS[index] : undefined,
          })
        );

        setProducts(productsWithGrid);
      } catch (error) {
        console.error("제품 데이터를 가져오는데 실패했습니다", error);
        // 에러 발생 시 기본 데이터 사용 (선택 사항)
        setProducts(getDefaultProducts());
      }
    };

    fetchProducts();
  }, []);

  // API 호출 실패 시 사용할 기본 데이터
  const getDefaultProducts = (): Product[] => {
    return page2DummyProducts.map((product) => ({
      ...product,
      gridArea: product.gridArea,
    }));
  };

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
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Page2;
