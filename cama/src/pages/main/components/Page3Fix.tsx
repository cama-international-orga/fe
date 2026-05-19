import {
    irregularGrid,
    overlayText,
    productTitleContainer,
} from "./Page3.style.css";
import { useEffect, useState } from "react";
import { page3DummyProducts } from "./dummyProduct.ts";
import ProductItemCompany from "../../../components/IrregularGridCompany";

interface Product {
    id: number;
    name: string;
    image: string;
    gridArea: string;
    url: string;
}

const Page3Fix = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isSmall, setIsSmall] = useState(() => window.innerWidth <= 1100);

    useEffect(() => {
        const handleResize = () => setIsSmall(window.innerWidth <= 1100);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setProducts(
            page3DummyProducts.map((product) => ({ ...product, gridArea: product.gridArea }))
        );
    }, []);

    return (
        <div className={irregularGrid}>
            {products.map((product) => (
                <ProductItemCompany
                    key={product.id}
                    {...product}
                    gridArea={isSmall ? (undefined as unknown as string) : product.gridArea}
                />
            ))}

            {/* 타이틀 — 데스크탑: 우측 패널, 소형 화면: CSS order:-1 로 최상단 */}
            <div
                className={productTitleContainer}
                style={isSmall ? undefined : { gridArea: "1 / 7 / 7 / 9" }}
            >
                <h1 className={overlayText}>WITH</h1>
                <h1 className={overlayText}>OUR</h1>
                <h2 className={overlayText}>COMPANY</h2>
            </div>
        </div>
    );
};

export default Page3Fix;
