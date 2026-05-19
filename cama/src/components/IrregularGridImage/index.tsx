// components/ProductItem.tsx
import { imageItem, imageOverlay, overlayText } from "./index.style.css";

interface Product {
  id: number;
  name: string;
  image: string;
  gridArea: string;
  url : string;
}

const ProductItem = ({ id, name, image, gridArea, url }: Product) => {
  return (
    <div key={id} className={imageItem} style={{ gridArea: gridArea }}>
      <img src={image} alt={name} style={{
          width: "95%",
          height: "95%",
          objectFit: "fill"
      }} />
      <div className={imageOverlay} onClick={() => location.href = url}>
        <div className={overlayText}>{name}</div>
      </div>
    </div>
  );
};

export default ProductItem;
