import { useEffect, useState } from "react";
import { getProduct } from "../../../apis/product-detail/product-detail";
import { ProductDetail } from "../../../apis/product-detail/type";

const useProductDetailHook = (productId: string | undefined) => {
  const [productDetail, setProductDetail] = useState<ProductDetail>();
  // 최초 입력받은 category, companyId 값을 통해 API 호출로 최초 데이터 가져오기
  useEffect(() => {
    const fetchDefault = async () => {
      if (productId) {
        const data = await getProduct(productId);
        setProductDetail(data);
      } else {
        console.log("productId is undefined");
      }
    };

    fetchDefault();
  }, [productId]);

  return {
    productDetail,
  };
};

export default useProductDetailHook;
