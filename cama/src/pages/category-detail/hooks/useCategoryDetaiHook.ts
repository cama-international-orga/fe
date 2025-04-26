import { useEffect, useState } from "react";
import { Product, CompanyProps } from "../../../apis/products/type";
import { getProducts } from "../../../apis/products/products";
import { useModal } from "../../../contexts";
import { AddCompanyModal } from "../components";
export const useCategoryDetaiHook = (category: string) => {
  const [categoryThumbnail, setCategoryThumbnail] = useState<string>();
  const [companys, setCompanys] = useState<CompanyProps[]>([]);
  const [products, setProducts] = useState<Product[] | null>(null);

  const { openModal } = useModal();
  // 최초 입력받은 category 값을 통해 API 호출로 최초 데이터 가져오기
  useEffect(() => {
    const fetchDefault = async () => {
      const response = await getProducts(category, "0");
      console.log(response);
      setCategoryThumbnail(response.thumbNail);
      setCompanys(response.companyLists);
      setProducts(response.productLists);
    };

    fetchDefault();
  }, []);

  const modifyThumbnail = (category: string, newThumbnail: string) => {
    console.log(category, newThumbnail);
    // API 호출 필요
    // 모달 창 띄우기
  };

  const addCompany = () => {
    // API 호출 필요
    // 모달 창 띄우기
    openModal({
      component: AddCompanyModal,
      props: { categoryId: category },
    });
  };

  const removeCompany = (id: string) => {
    console.log(id);
    // API 호출 필요
    // 모달 창 띄우기
  };

  const addProduct = (newProduct: Product) => {
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
    categoryThumbnail,
    products,
    companys,
    modifyThumbnail,
    addCompany,
    removeCompany,
    addProduct,
    removeProduct,
  };
};
