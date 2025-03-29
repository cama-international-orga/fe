// components/ProductItem.tsx
import { imageItem, imageOverlay, overlayText } from "./index.style.css";

interface Product {
  id: number;
  name: string;
  image: string;
  gridArea: string;
  description?: string;
  category?: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div
      key={product.id}
      className={imageItem}
      style={{ gridArea: product.gridArea }}
    >
      <img src={product.image} alt={product.name} />
      <div className={imageOverlay}>
        <div className={overlayText}>{product.name}</div>
      </div>
    </div>
  );
};

export default ProductItem;
