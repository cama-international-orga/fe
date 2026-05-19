import {useCallback, useEffect, useState} from "react";
import {CompanyDetails, SidebarCategory} from "../../../apis/products/type.ts";
import {useModal} from "../../../contexts";
import {deleteCompany} from "../../../apis/products/products.ts";
import AddCompanyModal from "../../category-detail/components/AddCompanyModal.tsx";
import DeleteModal from "../../../components/DeleteModal";
import {toast} from "sonner";
import {getCompanyByCategoryDetail, getSideBarCategory} from "../../../apis/category-company/category-company.ts";


const useCategoryCompanyHook = (categoryPath: string, categoryDetailId : string, isLoggedIn: boolean) => {
    const [companys, setCompanys] = useState<CompanyDetails>({
        categoryDetailName: '',
        companyAllLists: [],
    });
    const [sidebarCategory, setSidebarCategory] = useState<SidebarCategory[]>([]);
    //const navigate = useNavigate();
    const { openModal, closeAllModals } = useModal();

    const fetchData = useCallback(async () => {
        try {
            const companyCategory = await getCompanyByCategoryDetail(
                categoryPath,
                categoryDetailId
            );
            console.log(companyCategory);
            const sidebarCategory = await getSideBarCategory(categoryPath);
            setSidebarCategory(sidebarCategory);
            //
            // if (isLoggedIn) {
            //     const sortingProducts = await getProductsByCategory(categoryPath, categoryDetailId);
            //     setSortingProducts(sortingProducts);
            // }

            //const sortingProducts = await getProductsByCategory(categoryPath);
            //setCategoryThumbnail(productsByCompany.thumbNail);
            setCompanys(companyCategory);
            //setSortingProducts(sortingProducts);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }, [categoryPath, isLoggedIn, categoryDetailId]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const addCompanyModalOn = () => {
        // API 호출 필요
        // 모달 창 띄우기
        openModal({
            component: AddCompanyModal,
            props: { categoryPath: categoryPath , categoryDetailId: categoryDetailId },
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
    return {
       companys,
       addCompanyModalOn,
       removeCompanyModalOn,
       sidebarCategory
    };
};

export default useCategoryCompanyHook;