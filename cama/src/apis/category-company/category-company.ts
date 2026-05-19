import { publicInstance } from "../axios";
import { CategoryDetail, CategoryDetails} from "./type.ts";

export const getCompanyByCategoryDetail  = async (
    categoryPath: string,
    categoryDetailId: string,
): Promise<CategoryDetail> => {
    const response = await publicInstance.get(`/categories/${categoryPath}/detail/${categoryDetailId}`);

    return response.data.data; // To-Do 변수명
};

export const getSideBarCategory  = async (
    categoryPath: string,
): Promise<CategoryDetails[]> => {
    const response = await publicInstance.get(`/categories/${categoryPath}/detail`);

    return response.data.data.categoryDetailLists; // To-Do 변수명
};