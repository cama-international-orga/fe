import { useEffect, useState, useCallback } from "react";
import {
  Products,
  Company,
  CategoryProduct,
} from "../../../apis/products/type";
import {
  deleteCompany,
  deleteProduct,
  getProductsByCategoryByCompany,
  getProductsByCategory,
} from "../../../apis/products/products";
import { useModal } from "../../../contexts";
import AddCompanyModal from "../components/AddCompanyModal";
import DeleteModal from "../../../components/DeleteModal";
import { toast } from "sonner";
import AddProductModal from "../components/AddProductModal";
import EditProductModal from "../components/EditProductModal";
import ProductSortModal from "../components/ProductSortModal";
import { getProduct } from "../../../apis/product-detail/product-detail";
import { useNavigate, useSearchParams } from "react-router-dom";

const useCategoryDetailHook = (categoryPath: string, companyId: string) => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");

  const [categoryThumbnail, setCategoryThumbnail] = useState<string>();
  const [companys, setCompanys] = useState<Company[]>([]);
  const [products, setProducts] = useState<Products[] | null>(null);
  const [sortingProducts, setSortingProducts] = useState<CategoryProduct[]>([]);
  const [totalPages, setTotalPages] = useState(10);
  const navigate = useNavigate();
  const { openModal, closeAllModals } = useModal();

  const fetchData = useCallback(async () => {
    try {
      const productsByCompany = await getProductsByCategoryByCompany(
        categoryPath,
        companyId,
        page
      );
      const sortingProducts = await getProductsByCategory(categoryPath);
      setCategoryThumbnail(productsByCompany.thumbNail);
      setCompanys(productsByCompany.companyLists);
      setProducts(productsByCompany.productsLists);
      setTotalPages(productsByCompany.pageInfo.totalPages);
      setSortingProducts(sortingProducts);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }, [categoryPath, companyId, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

  const editProductModalOn = async (productId: string) => {
    try {
      const productDetail = await getProduct(productId);
      openModal({
        component: EditProductModal,
        props: {
          categoryPath: productDetail.categoryPath || categoryPath,
          companies: companys,
          productDetail,
          productId,
        },
      });
    } catch (e) {
      console.error(e);
      toast.error("상품 상세 정보를 불러오지 못했습니다.");
    }
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

  const productSortModalOn = () => {
    openModal({
      component: ProductSortModal,
      props: {
        products: sortingProducts || [],
      },
    });
  };

  return {
    categoryThumbnail,
    products,
    companys,
    addCompanyModalOn,
    addProductModalOn,
    editProductModalOn,
    productSortModalOn,
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
