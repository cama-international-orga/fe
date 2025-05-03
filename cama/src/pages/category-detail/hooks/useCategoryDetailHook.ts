import { useEffect, useState } from "react";
import { Products, Company } from "../../../apis/products/type";
import {
  deleteCompany,
  getProducts,
  deleteProduct,
} from "../../../apis/products/products";
import { useModal } from "../../../contexts";
import AddCompanyModal from "../components/AddCompanyModal";
import DeleteModal from "../../../components/DeleteModal";
import { toast } from "sonner";
import AddProductModal from "../components/AddProductModal";

const useCategoryDetailHook = (categoryPath: string, companyId: string) => {
  const [categoryThumbnail, setCategoryThumbnail] = useState<string>();
  const [companys, setCompanys] = useState<Company[]>([]);
  const [products, setProducts] = useState<Products[] | null>(null);

  const { openModal, closeAllModals } = useModal();
  // 최초 입력받은 category 값을 통해 API 호출로 최초 데이터 가져오기
  useEffect(() => {
    const fetchDefault = async () => {
      const response = await getProducts(categoryPath, companyId);
      console.log(response);
      setCategoryThumbnail(response.thumbNail);
      setCompanys(response.companyLists);
      setProducts(response.productsLists);
    };

    fetchDefault();
  }, []);

  const modifyThumbnail = (category: string, newThumbnail: string) => {
    console.log(category, newThumbnail);
    // API 호출 필요
    // 모달 창 띄우기
  };

  const addCompanyModalOn = () => {
    // API 호출 필요
    // 모달 창 띄우기
    openModal({
      component: AddCompanyModal,
      props: { categoryPath: categoryPath },
    });
  };

  const removeCompanyModalOn = (companyId: string) => {
    openModal({
      component: DeleteModal,
      props: {
        handleDelete: async () => {
          await deleteCompany(categoryPath, companyId);
          closeAllModals();
          toast.success("회사가 삭제되었습니다.");
          window.location.reload();
        },
        handleCancel: () => {
          closeAllModals();
        },
      },
    });
  };
  const removeProductModalOn = (productId: string) => {
    openModal({
      component: DeleteModal,
      props: {
        handleDelete: async () => {
          await deleteProduct(productId);
          closeAllModals();
          toast.success("상품이 삭제되었습니다.");
          window.location.reload();
        },
        handleCancel: () => {
          closeAllModals();
        },
      },
    });
  };

  const addProductModalOn = () => {
    console.log("상품 추가 모달 띄우기");
    // API 호출 필요
    // 모달 창 띄우기
    openModal({
      component: AddProductModal,
      props: {
        categoryPath: categoryPath,
        companies: companys,
      },
    });
  };

  const addProduct = (newProduct: Products) => {
    console.log(newProduct);
    // API 호출 필요
    // 모달 창 띄우기
  };

  const removeProduct = async (productId: string) => {
    await deleteProduct(productId);
    closeAllModals();
    toast.success("상품이 삭제되었습니다.");
    window.location.reload();
  };

  return {
    categoryThumbnail,
    products,
    companys,
    modifyThumbnail,
    addCompanyModalOn,
    addProductModalOn,
    removeCompanyModalOn,
    removeProductModalOn,
    addProduct,
    removeProduct,
  };
};

export default useCategoryDetailHook;
