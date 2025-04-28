// components/Page3.tsx
import ProductItem from "../../../components/IrregularGridImage";
import {
  irregularGrid,
  overlayText,
  productTitleContainer,
} from "./Page3.style.css";
import { useEffect, useState } from "react";
import { publicInstance } from "../../../apis/axios";

// gridArea 레이아웃 설정을 상수로 정의
const GRID_AREAS = [
  "1 / 1 / 2 / 3",
  "1 / 3 / 2 / 4",
  "1 / 4 / 3 / 5",
  "2 / 1 / 5 / 2",
  "2 / 2 / 3 / 4",
  "3 / 2 / 5 / 5",
];

// 제품 타입 정의
interface Product {
  id: number;
  name: string;
  image: string;
  gridArea: string;
}

const Page3 = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // API에서 제품 데이터 가져오기
    const fetchProducts = async () => {
      try {
        const response = await publicInstance.get(
          "/api/v1/products/featured/page3"
        );

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
        // 에러 발생 시 기본 데이터 사용
        // setProducts(getDefaultProducts());
      }
    };

    fetchProducts();
  }, []);

  // // API 호출 실패 시 사용할 기본 데이터
  // const getDefaultProducts = (): Product[] => {
  //   return page3DummyProducts.map((product) => ({
  //     ...product,
  //     gridArea: product.gridArea,
  //   }));
  // };

  return (
    <div className={irregularGrid}>
      {/* 제품 이미지 섹션 */}
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
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
