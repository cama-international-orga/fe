import { useEffect, useState } from "react";

interface ProductsProps {
  id: string;
  image: string;
  name: string;
}

export const useProductsManager = (category: string) => {
  // 최초 입력받은 category 값을 통해 API 호출로 최초 데이터 가져오기
  useEffect(() => {
    const fetchDefault = async () => {
      const response = await fetch(`/api/v1/products/${category}/all`);
      const data = await response.json();
      setProductsThumbnail(data.productThumbnailImage);
      setCompanys(data.companys);
      setProducts(data.products);
    };

    fetchDefault();
  }, []);

  const [productsThumbnail, setProductsThumbnail] = useState<string>();
  const [companys, setCompanys] = useState<string[]>([]);
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const modifyThumbnail = (category: string, newThumbnail: string) => {
    console.log(category, newThumbnail);
    // API 호출 필요
    // 모달 창 띄우기
  };

  const addCompany = (newCompany: string) => {
    console.log(newCompany);
    // API 호출 필요
    // 모달 창 띄우기
  };

  const removeCompany = (id: string) => {
    console.log(id);
    // API 호출 필요
    // 모달 창 띄우기
  };

  const addProduct = (newProduct: ProductsProps) => {
    console.log(newProduct);
    // API 호출 필요
    // 모달 창 띄우기
  };

  const removeProduct = (id: string) => {
    console.log(id);
    // API 호출 필요
    // 모달 창 띄우기
  };

  return {
    productsThumbnail,
    products,
    companys,
    modifyThumbnail,
    addCompany,
    removeCompany,
    addProduct,
    removeProduct,
  };
};
