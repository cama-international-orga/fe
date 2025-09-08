import useProductDetailHook from "./hooks/useProductDetailHook";
import {
  wrapper,
  header,
  productName,
  modelImages,
  modelImage,
  infoSection,
  infoTitle,
  infoTable,
  infoTableTh,
  infoTableTd,
  detailImagesSection,
  detailImagesTitle,
  detailImages,
  detailImage,
  category,
} from "./index.style.css";
import { useParams } from "react-router-dom";
import { useModal } from "../../contexts/ModalContexts";
import ImageModal from "../../components/ImageModal";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { productDetail } = useProductDetailHook(productId);
  const { openModal } = useModal();

  const handleImageClick = (imageUrl: string, altText: string) => {
    openModal({
      component: ImageModal,
      props: { imageUrl, altText },
    });
  };

  const getGridStyle = (imageCount: number) => {
    if (imageCount === 1) {
      return {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
        aspectRatio: "1",
      };
    } else if (imageCount === 2) {
      return {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
        aspectRatio: "2/1",
      };
    } else {
      return {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        aspectRatio: "1",
      };
    }
  };

  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={category}>
          {productDetail?.companyImage && (
            <img
              src={productDetail.companyImage}
              alt="회사 로고"
              style={{
                maxWidth: "300px",
                objectFit: "contain",
              }}
            />
          )}
        </div>
      </div>
      <h2 className={productName}>{productDetail?.model.productName}</h2>
      <div className={modelImages}>
        {productDetail?.model.modelImages.map((img, idx) => (
          <img
            key={idx}
            src={img.modelImage}
            alt={`모델 이미지 ${idx + 1}`}
            className={modelImage}
            onClick={() =>
              handleImageClick(img.modelImage, `모델 이미지 ${idx + 1}`)
            }
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
      <div className={infoSection}>
        <h3 className={infoTitle}>Information</h3>
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
          <h3 className={detailImagesTitle}>Details</h3>
          <div
            className={detailImages}
            style={getGridStyle(productDetail.detailImages.length)}
          >
            {productDetail?.detailImages.map((img, idx) => (
              <img
                key={idx}
                src={img.detailImage}
                alt={`상세 이미지 ${idx + 1}`}
                className={detailImage}
                onClick={() =>
                  handleImageClick(img.detailImage, `상세 이미지 ${idx + 1}`)
                }
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
