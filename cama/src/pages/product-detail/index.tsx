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

interface ProductDetailPageProps {
  data: {
    categoryPath: string;
    companyId: string;
    model: {
      productName: string;
      modelImages: { modelImage: string }[];
    };
    information: { infoKey: string; infoValue: string }[];
    detailImages: { detailImage: string }[];
  };
}

const ProductDetailPage = ({
  data,
}: {
  data: ProductDetailPageProps["data"];
}) => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={category}>{data.categoryPath}</div>
      </div>
      <h2 className={productName}>{data.model.productName}</h2>
      <div className={modelImages}>
        {data.model.modelImages.map((img, idx) => (
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
            {data.information.map((info, idx) => (
              <tr key={idx}>
                <th className={infoTableTh}>{info.infoKey}</th>
                <td className={infoTableTd}>{info.infoValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={detailImagesSection}>
        <h3>상세 이미지</h3>
        <div className={detailImages}>
          {data.detailImages.map((img, idx) => (
            <img
              key={idx}
              src={img.detailImage}
              alt={`상세 이미지 ${idx + 1}`}
              className={detailImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
