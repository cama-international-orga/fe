import { publicInstance, privateInstance } from "../axios";
import { CategoryEditItem, HeaderNavItem } from "./type";

export const getCategories = async (): Promise<HeaderNavItem[]> => {
  const response = await publicInstance.get("/categories");

  return response.data.data.categories;
};

export const deleteCategory = async (categoryId: string): Promise<void> => {
  await privateInstance.delete(`/categories/${categoryId}`);
};

export const addCategory = async (
  category: Omit<HeaderNavItem, "categoryId">
): Promise<void> => {
  const formData = new FormData();

  // JSON 데이터를 문자열로 변환하여 FormData에 추가
  const categoryData = {
    categoryName: category.categoryName,
    categoryPath: category.categoryPath,
  };

  // JSON 데이터를 Blob으로 변환하고 Content-Type 힌트 추가
  const categoryBlob = new Blob([JSON.stringify(categoryData)], {
    type: "application/json",
  });

  // Blob을 FormData에 추가
  formData.append("category", categoryBlob);

  // 파일 추가
  if (category.thumbNail) {
    formData.append("thumbNail", category.thumbNail);
  }

  // multipart/form-data는 자동으로 설정됨
  await privateInstance.post("/categories", formData);
};

export const editCategory = async (
  category: CategoryEditItem
): Promise<void> => {
  const formData = new FormData();

  // JSON 데이터를 문자열로 변환하여 FormData에 추가
  const categoryData = {
    categoryName: category.categoryName,
    categoryPath: category.categoryPath,
    categoryBeforePath: category.categoryBeforePath,
  };

  // JSON 데이터를 Blob으로 변환하고 Content-Type 힌트 추가
  const categoryBlob = new Blob([JSON.stringify(categoryData)], {
    type: "application/json",
  });

  // Blob을 FormData에 추가
  formData.append("category", categoryBlob);

  // 파일 추가 (새로운 이미지가 있는 경우에만)
  if (category.thumbNail) {
    formData.append("thumbNail", category.thumbNail);
  }

  // multipart/form-data는 자동으로 설정됨
  await privateInstance.patch(`/categories`, formData);
};
