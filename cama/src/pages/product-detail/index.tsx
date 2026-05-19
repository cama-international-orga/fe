import useProductDetailHook from "./hooks/useProductDetailHook";
import {
  wrapper,
  header,
  productName,
  productContainer,
  infoSection,
  infoTitle,
  infoTable,
  infoTableTh,
  infoTableTd,
  detailImagesSection,
  detailImagesTitle,
  detailImages,
  detailImage,
  category, categoryDetail, thumbnailList, specDescription,
} from "./index.style.css";
import { useParams } from "react-router-dom";
import { useModal } from "../../contexts/ModalContexts";
import ImageModal from "../../components/ImageModal";
import {useEffect, useState} from "react";
import {imageSection} from "./index.style.css";
import {mainImageWrapper} from "./index.style.css";
import {mainImage} from "./index.style.css";
import {thumbnailImage} from "./index.style.css";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { productDetail } = useProductDetailHook(productId);
  const { openModal } = useModal();

  // 현재 크게 보여줄 이미지 URL 상태 관리
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedImagesDetail, setSelectedImagesDetail] = useState<any[]>([]);
  const [selectedImagesInstall, setSelectedImagesInstall] = useState<any[]>([]);
  const [selectedImagesSpec, setSelectedImagesSpec] = useState<any[]>([]);
  // 데이터가 로드되면 첫 번째 이미지를 기본값으로 설정
  useEffect(() => {
    if (productDetail?.model.modelImages && productDetail.model.modelImages.length > 0) {
      setSelectedImage(productDetail.model.modelImages[0].modelImage);
    }


    if (productDetail?.detailImages && productDetail.detailImages.length > 0) {
      // 이미지가 1개밖에 없으면 [0, 0]으로, 2개 이상이면 [0, 1]로 초기화
      const firstImg = productDetail.detailImages[0].detailImage;
      const secondImg =  productDetail.detailImages.length === 1? productDetail.detailImages[0].detailImage : productDetail.detailImages[1].detailImage;
      setSelectedImagesDetail([firstImg, secondImg]);
    }

    if (productDetail?.specificationImages && productDetail.specificationImages.length > 0) {
      // 이미지가 1개밖에 없으면 [0, 0]으로, 2개 이상이면 [0, 1]로 초기화
      const firstImg = productDetail.specificationImages[0].specImage;
      const secondImg =  productDetail.specificationImages.length === 1? productDetail.specificationImages[0].specImage : productDetail.specificationImages[1].specImage;
      setSelectedImagesSpec([firstImg, secondImg]);
    }

    if (productDetail?.installImages && productDetail.installImages.length > 0) {
      // 이미지가 1개밖에 없으면 [0, 0]으로, 2개 이상이면 [0, 1]로 초기화
      const firstImg = productDetail.installImages[0].installImage;
      const secondImg =productDetail.installImages.length === 1 ?  productDetail.installImages[0].installImage : productDetail.installImages[1].installImage;
      setSelectedImagesInstall([firstImg, secondImg]);
    }
  }, [productDetail]);


  const handleThumbnailClickDetail = (clickedImage: any) => {
    setSelectedImagesDetail((prev) => {
      // 기존 오른쪽 이미지를 왼쪽으로 보내고, 클릭한 이미지를 오른쪽에 배치
      return [prev[1], clickedImage];
    });
  };

  const handleThumbnailClickSpec = (clickedImage: any) => {
    setSelectedImagesSpec((prev) => {
      // 기존 오른쪽 이미지를 왼쪽으로 보내고, 클릭한 이미지를 오른쪽에 배치
      return [prev[1], clickedImage];
    });
  };

  const handleThumbnailClickInstall = (clickedImage: any) => {
    setSelectedImagesInstall((prev) => {
      // 기존 오른쪽 이미지를 왼쪽으로 보내고, 클릭한 이미지를 오른쪽에 배치
      return [prev[1], clickedImage];
    });
  };

  // 데이터가 없을 경우 처리
  if (!productDetail) return null;

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
      };
    } else if (imageCount === 2) {
      return {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
      };
    } else {
      return {
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
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
                      maxWidth: "160px",
                      objectFit: "contain",
                      maxHeight: "80px",
                    }}
                />
            )}
          </div>
        </div>
        <h2 className={productName}>{productDetail?.model.productName}</h2>
        <h2 className={categoryDetail}>{productDetail?.categoryDetailName}</h2>
        <hr style={{
          border: "none",
          height: "1px",
          width: "100%",
          backgroundColor: "#e8e8e8",
          margin: "0 0 8px 0",
        }}/>

        <div className={productContainer}>

          {/* 왼쪽: 이미지 영역 */}
          <div className={imageSection}>
            {/* 메인 큰 이미지 */}
            <div className={mainImageWrapper}>
              {selectedImage && (
                  <img
                      src={selectedImage}
                      alt="Selected Product"
                      className={mainImage}
                      onClick={() =>
                          handleImageClick(selectedImage, ``)
                      }
                  />
              )}
            </div>

            {/* 썸네일 리스트 (이미지가 2개 이상일 때만 표시) */}
            {productDetail?.model.modelImages.length > 1 && (
                <div className={thumbnailList}>

                  {productDetail?.model.modelImages.map((img, idx) => (
                      <img
                          key={idx}
                          src={img.modelImage}
                          alt={`Preview ${idx + 1}`}
                          className={thumbnailImage}
                          onClick={() => setSelectedImage(img.modelImage)}
                      />
                  ))}
                </div>
            )}
          </div>

          {/* 오른쪽: 정보 테이블 영역 */}
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

        </div>


        {/*디테일  */}

        {(productDetail?.detailImages?.length ?? 0) > 0 && (
            <div className={detailImagesSection}>
              <h3 className={detailImagesTitle}>detail</h3>

              {/* [메인 이미지 영역]
        - 전체 이미지가 1개면: Grid 1개 스타일, 이미지는 1개만 표시
        - 전체 이미지가 2개 이상이면: Grid 2개 스타일, 이미지는 2개 표시 (selectedImages 사용)
    */}
              <div
                  className={detailImages}
                  // 이미지가 1개면 1, 2개 이상이면 무조건 2를 넣어서 스타일 결정
                  style={getGridStyle(productDetail.detailImages.length < 2 ? 1 : 2)}
              >

                {productDetail.detailImages.length === 1 ? (
                    <img
                        key={0}
                        src={selectedImagesDetail[0]}
                        alt={`상세 이미지 ${1}`}
                        className={detailImage}
                        onClick={() =>
                            handleImageClick(selectedImagesDetail[0], `상세 이미지 ${1}`)
                        }
                        style={{cursor: "pointer", width: "100%"}}
                    />

                ) : (
                    selectedImagesDetail.map((img, idx) => (
                        img && ( // img가 있을 때만 렌더링 (안전장치)
                            <img
                                key={idx}
                                src={img}
                                alt={`상세 이미지 ${idx + 1}`}
                                className={detailImage}
                                onClick={() =>
                                    handleImageClick(img, `상세 이미지 ${idx + 1}`)
                                }
                                style={{cursor: "pointer", width: "100%"}}
                            />
                        )))

                )}

              </div>

              {/* [썸네일 리스트 영역]
        - 전체 이미지가 3개 이상일 때만 하단에 노출
    */}
              {(productDetail?.detailImages?.length ?? 0) > 2 && (
                  <div className={thumbnailList}>
                    {productDetail.detailImages.map((img, idx) => {
                      // 현재 루프의 이미지가 선택된 이미지인지 확인
                      const isSelected1 = selectedImagesDetail[0] === img.detailImage;
                      const isSelected2 = selectedImagesDetail[1] === img.detailImage;

                      return (
                          <img
                              key={idx}
                              src={img.detailImage}
                              alt={`Preview ${idx + 1}`}
                              className={thumbnailImage}
                              onClick={() => handleThumbnailClickDetail(img.detailImage)}
                              style={{
                                cursor: "pointer",
                                // 선택되었을 때만 어두운 회색(dimgray) 테두리 추가
                                border: (isSelected1 || isSelected2) ? "1px solid #696969" : "1px solid transparent",
                                borderRadius: "4px", // 테두리가 있다면 약간의 곡률이 있는 게 예뻐요
                                transition: "border 0.2s ease" // 부드러운 전환 효과
                              }}
                          />
                      );
                    })}
                  </div>
              )}
            </div>
        )}




        {/*명세서 */}

        {(productDetail?.specificationImages?.length ?? 0) > 0 && (
            <div className={detailImagesSection}>
              <h3 className={detailImagesTitle}>SPECIFICATIONS</h3>
              <h3 className={specDescription}
              style={{
                transform: "skewX(-15deg)",
              }}>Certification and performance classification
              </h3>
              {/* [메인 이미지 영역]
        - 전체 이미지가 1개면: Grid 1개 스타일, 이미지는 1개만 표시
        - 전체 이미지가 2개 이상이면: Grid 2개 스타일, 이미지는 2개 표시 (selectedImages 사용)
    */}
              <div
                  className={detailImages}
                  // 이미지가 1개면 1, 2개 이상이면 무조건 2를 넣어서 스타일 결정
                  style={getGridStyle(productDetail.specificationImages.length < 2 ? 1 : 2)}
              >

                {productDetail.specificationImages.length === 1 ? (
                    <img
                        key={0}
                        src={selectedImagesSpec[0]}
                        alt={`상세 이미지 ${1}`}
                        className={detailImage}
                        onClick={() =>
                            handleImageClick(selectedImagesSpec[0], `상세 이미지 ${1}`)
                        }
                        style={{cursor: "pointer", width: "100%"}}
                    />

                ) : (
                    selectedImagesSpec.map((img, idx) => (
                        img && ( // img가 있을 때만 렌더링 (안전장치)
                            <img
                                key={idx}
                                src={img}
                                alt={`상세 이미지 ${idx + 1}`}
                                className={detailImage}
                                onClick={() =>
                                    handleImageClick(img, `상세 이미지 ${idx + 1}`)
                                }
                                style={{cursor: "pointer", width: "100%"}}
                            />
                        )))

                )}

              </div>

              {/* [썸네일 리스트 영역]
        - 전체 이미지가 3개 이상일 때만 하단에 노출
    */}
              {(productDetail?.specificationImages?.length ?? 0) > 2 && (
                  <div className={thumbnailList}>
                    {productDetail.specificationImages.map((img, idx) => {
                      // 현재 루프의 이미지가 선택된 이미지인지 확인
                      const isSelected1 = selectedImagesSpec[0] === img.specImage;
                      const isSelected2 = selectedImagesSpec[1] === img.specImage;

                      return (
                          <img
                              key={idx}
                              src={img.specImage}
                              alt={`Preview ${idx + 1}`}
                              className={thumbnailImage}
                              onClick={() => handleThumbnailClickSpec(img.specImage)}
                              style={{
                                cursor: "pointer",
                                // 선택되었을 때만 어두운 회색(dimgray) 테두리 추가
                                border: (isSelected1 || isSelected2) ? "1px solid #696969" : "1px solid transparent",
                                borderRadius: "4px", // 테두리가 있다면 약간의 곡률이 있는 게 예뻐요
                                transition: "border 0.2s ease" // 부드러운 전환 효과
                              }}
                          />
                      );
                    })}
                  </div>
              )}
            </div>
        )}


        {/* 설치 후 후기 */}
        {(productDetail?.installImages?.length ?? 0) > 0 && (
            <div className={detailImagesSection}>
              <h3 className={detailImagesTitle}>install</h3>

              {/* [메인 이미지 영역]
        - 전체 이미지가 1개면: Grid 1개 스타일, 이미지는 1개만 표시
        - 전체 이미지가 2개 이상이면: Grid 2개 스타일, 이미지는 2개 표시 (selectedImages 사용)
    */}
              <div
                  className={detailImages}
                  // 이미지가 1개면 1, 2개 이상이면 무조건 2를 넣어서 스타일 결정
                  style={getGridStyle(productDetail.installImages.length < 2 ? 1 : 2)}
              >

                {productDetail.installImages.length === 1 ? (
                      <img
                          key={0}
                          src={selectedImagesInstall[0]}
                          alt={`상세 이미지 ${1}`}
                          className={detailImage}
                          onClick={() =>
                              handleImageClick(selectedImagesInstall[0], `상세 이미지 ${1}`)
                          }
                          style={{ cursor: "pointer", width: "100%" }}
                      />

                ) : (
                    selectedImagesInstall.map((img, idx) => (
                      img && ( // img가 있을 때만 렌더링 (안전장치)
                      <img
                      key={idx}
                    src={img}
                    alt={`상세 이미지 ${idx + 1}`}
                    className={detailImage}
                    onClick={() =>
                        handleImageClick(img, `상세 이미지 ${idx + 1}`)
                    }
                    style={{ cursor: "pointer", width: "100%" }}
                  />
                  ) ))

                  )}

              </div>

              {/* [썸네일 리스트 영역]
        - 전체 이미지가 3개 이상일 때만 하단에 노출
    */}
              {(productDetail?.installImages?.length ?? 0) > 2 && (
                  <div className={thumbnailList}>
                    {productDetail.installImages.map((img, idx) => {
                      // 현재 루프의 이미지가 선택된 이미지인지 확인
                      const isSelected1 = selectedImagesInstall[0] === img.installImage;
                      const isSelected2 = selectedImagesInstall[1] === img.installImage;

                      return (
                          <img
                              key={idx}
                              src={img.installImage}
                              alt={`Preview ${idx + 1}`}
                              className={thumbnailImage}
                              onClick={() => handleThumbnailClickInstall(img.installImage)}
                              style={{
                                cursor: "pointer",
                                // 선택되었을 때만 어두운 회색(dimgray) 테두리 추가
                                border: (isSelected1 || isSelected2) ? "1px solid #696969" : "1px solid transparent",
                                borderRadius: "4px", // 테두리가 있다면 약간의 곡률이 있는 게 예뻐요
                                transition: "border 0.2s ease" // 부드러운 전환 효과
                              }}
                          />
                      );
                    })}
                  </div>
              )}
            </div>
        )}
      </div>
  );
};

export default ProductDetailPage;
