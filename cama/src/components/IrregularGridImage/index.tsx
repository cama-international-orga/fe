// components/ProductItem.tsx
import { imageItem, imageOverlay, overlayText } from "./index.style.css";

interface Product {
  id: number;
  name: string;
  image: string;
  gridArea: string;
}

const ProductItem = ({ id, name, image, gridArea }: Product) => {
  return (
    <div key={id} className={imageItem} style={{ gridArea: gridArea }}>
      <img src={image} alt={name} />
      <div className={imageOverlay}>
        <div className={overlayText}>{name}</div>
      </div>
    </div>
  );
};

export default ProductItem;
