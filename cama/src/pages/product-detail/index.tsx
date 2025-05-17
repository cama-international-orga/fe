import useProductDetailHook from "./hooks/useProductDetailHook";
import {
  wrapper,
  header,
  productName,
  modelImages,
  modelImage,
  infoSection,
  infoTable,
  infoTableTh,
  infoTableTd,
  detailImagesSection,
  detailImages,
  detailImage,
  category,
} from "./index.style.css";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { productDetail } = useProductDetailHook(productId || "");
  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={category}>{productDetail?.categoryPath}</div>
      </div>
      <h2 className={productName}>{productDetail?.model.productName}</h2>
      <div className={modelImages}>
        {productDetail?.model.modelImages.map((img, idx) => (
          <img
            key={idx}
            src={img.modelImage}
            alt={`모델 이미지 ${idx + 1}`}
            className={modelImage}
          />
        ))}
      </div>
      <div className={infoSection}>
        <h1>Information</h1>
        <table className={infoTable}>
          <tbody>
            {productDetail?.information.map((info, idx) => (
              <tr key={idx}>
                <th className={infoTableTh}>{info.infoKey}</th>
                <td className={infoTableTd}>{info.infoValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {productDetail?.detailImages.length && (
        <div className={detailImagesSection}>
          <h3>상세 이미지</h3>
          <div className={detailImages}>
            {productDetail?.detailImages.map((img, idx) => (
              <img
                key={idx}
                src={img.detailImage}
                alt={`상세 이미지 ${idx + 1}`}
                className={detailImage}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
