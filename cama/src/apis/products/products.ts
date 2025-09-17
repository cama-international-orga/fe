import { publicInstance, privateInstance } from "../axios";
import { CategoryDetail, CategoryProduct, ProductsSort } from "./type";

export const getProductsByCategoryByCompany = async (
  categoryId: string,
  companyId: string,
  page: number
): Promise<CategoryDetail> => {
  const response = await publicInstance.get(
    `/categories/${categoryId}/company/${companyId}?page=${page}`
  );

  return response.data.data;
};

export const getProductsByCategory = async (
  categoryPath: string
): Promise<CategoryProduct[]> => {
  const response = await privateInstance.get(`/categories/${categoryPath}`);

  return response.data.data.productAllLists;
};

export const postProductsSort = async (
  sortProducts: ProductsSort
): Promise<void> => {
  await privateInstance.patch(`/products/sort`, sortProducts);
};

export const addProduct = async (
  categoryPath: string,
  companyId: string,
  formData: FormData
): Promise<void> => {
  await privateInstance.post(
    `/products/${categoryPath}/${companyId}`,
    formData
  );
};

export const editProduct = async (
  categoryPath: string,
  companyId: string,
  productId: string,
  formData: FormData
): Promise<void> => {
  await privateInstance.patch(
    `/products/${categoryPath}/${companyId}/${productId}`,
    formData
  );
};

export const deleteProduct = async (productId: string): Promise<void> => {
  await privateInstance.delete(`/products/${productId}`);
};

export const addCompany = async (
  categoryPath: string,
  companyName: string,
  companyLogo?: File
): Promise<void> => {
  const formData = new FormData();

  // JSON 데이터를 문자열로 변환하여 FormData에 추가
  const companyData = {
    companyName: companyName,
  };

  // JSON 데이터를 Blob으로 변환하고 Content-Type 힌트 추가
  const companyBlob = new Blob([JSON.stringify(companyData)], {
    type: "application/json",
  });

  // Blob을 FormData에 추가
  formData.append("name", companyBlob);

  // 파일 추가
  if (companyLogo) {
    formData.append("image", companyLogo);
  }

  // multipart/form-data는 자동으로 설정됨
  await privateInstance.post(`/categories/${categoryPath}/company`, formData);
};

export const deleteCompany = async (
  categoryPath: string,
  copmanyId: string
): Promise<void> => {
  const response = await privateInstance.delete(
    `/categories/${categoryPath}/company/${copmanyId}`
  );
  console.log(response);
};
