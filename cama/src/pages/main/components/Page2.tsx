import ProductItem from "../../../components/IrregularGridImage";
import {
  irregularGrid,
  overlayText,
  productTitleContainer,
} from "./Page2.style.css";
import { useEffect, useState } from "react";
import { publicInstance } from "../../../apis/axios";
import { page2DummyProducts } from "./dummyProduct";

const GRID_AREAS = [
  "1 / 2 / 2 / 3",
  "1 / 3 / 2 / 5",
  "1 / 5 / 3 / 6",
  "2 / 2 / 4 / 3",
  "2 / 3 / 3 / 5",
  "3 / 3 / 4 / 5",
  "3 / 5 / 4 / 5",
];

interface Product {
  id: number;
  name: string;
  image: string;
  gridArea: string;
  url: string;
}

const Page2 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isSmall, setIsSmall] = useState(() => window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth <= 1100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await publicInstance.get("/products/featured/page2");
        const productsWithGrid = response.data.map(
          (product: Product, index: number) => ({
            ...product,
            gridArea: index < GRID_AREAS.length ? GRID_AREAS[index] : undefined,
          })
        );
        setProducts(productsWithGrid);
      } catch {
        setProducts(getDefaultProducts());
      }
    };
    fetchProducts();
  }, []);

  const getDefaultProducts = (): Product[] =>
    page2DummyProducts.map((product) => ({ ...product, gridArea: product.gridArea }));

  return (
    <div className={irregularGrid}>
      <div
        className={productTitleContainer}
        style={isSmall ? undefined : { gridArea: "1 / 1 / 5 / 2" }}
      >
        <h1 className={overlayText}>OUR</h1>
        <h2 className={overlayText}>PRODUCTS</h2>
      </div>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          {...product}
          gridArea={isSmall ? (undefined as unknown as string) : product.gridArea}
        />
      ))}
    </div>
  );
};

export default Page2;
