import { useEffect, useState, useCallback } from "react";
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
import { useNavigate, useSearchParams } from "react-router-dom";

const useCategoryDetailHook = (categoryPath: string, companyId: string) => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");

  const [categoryThumbnail, setCategoryThumbnail] = useState<string>();
  const [companys, setCompanys] = useState<Company[]>([]);
  const [products, setProducts] = useState<Products[] | null>(null);
  const [totalPages, setTotalPages] = useState(10);
  const navigate = useNavigate();
  const { openModal, closeAllModals } = useModal();

  const fetchData = useCallback(async () => {
    try {
      const response = await getProducts(categoryPath, companyId, page);
      setCategoryThumbnail(response.thumbNail);
      setCompanys(response.companyLists);
      setProducts(response.productsLists);
      setTotalPages(response.pageInfo.totalPages);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }, [categoryPath, companyId, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

  const handlePageChange = (newPage: number) => {
    navigate(`/categories/${categoryPath}/${companyId}?page=${newPage}`);
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
    page,
    totalPages,
    handlePageChange,
  };
};

export default useCategoryDetailHook;
