// components/ProductItem.tsx
import { imageItem, imageOverlay, overlayText } from "./index.style.css";

interface Product {
  id: number;
  name: string;
  image: string;
  gridArea: string;
  url : string;
}

const ProductItemCompany = ({ id, name, image, gridArea, url }: Product) => {
  return (
    <div key={id} className={imageItem} style={{ gridArea: gridArea }}>
      <img src={image} alt={name} style={{
          width: "90%",
          height: "80%",
          objectFit: "fill",
          border: "0.5px solid #000000",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
      }} />
      <div className={imageOverlay} onClick={() => location.href = url}>
        <div className={overlayText}>{name}</div>
      </div>
    </div>
  );
};

export default ProductItemCompany;
