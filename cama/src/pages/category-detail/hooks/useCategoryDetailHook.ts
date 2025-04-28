import { useEffect, useState } from "react";
import { Product, Company } from "../../../apis/products/type";
import { deleteCompany, getProducts } from "../../../apis/products/products";
import { useModal } from "../../../contexts";
import AddCompanyModal from "../components/AddCompanyModal";
import DeleteModal from "../../../components/DeleteModal";
import { toast } from "sonner";

const useCategoryDetailHook = (categoryPath: string) => {
  const [categoryThumbnail, setCategoryThumbnail] = useState<string>();
  const [companys, setCompanys] = useState<Company[]>([]);
  const [products, setProducts] = useState<Product[] | null>(null);

  const { openModal, closeAllModals } = useModal();
  // 최초 입력받은 category 값을 통해 API 호출로 최초 데이터 가져오기
  useEffect(() => {
    const fetchDefault = async () => {
      const response = await getProducts(categoryPath, "0");
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
          console.log(`companyId 삭제됨: ${companyId}`);
          closeAllModals();
          toast.success("회사가 삭제되었습니다.");
          window.location.reload();
        },
      },
    });
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
    addCompanyModalOn,
    removeCompanyModalOn,
    addProduct,
    removeProduct,
  };
};

export default useCategoryDetailHook;
