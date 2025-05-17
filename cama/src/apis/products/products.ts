import { publicInstance, privateInstance } from "../axios";
import { CategoryDetail } from "./type";
export const getProducts = async (
  categoryId: string,
  companyId: string,
  page: number
): Promise<CategoryDetail> => {
  const response = await publicInstance.get(
    `/categories/${categoryId}/company/${companyId}?page=${page}`
  );

  return response.data.data;
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

export const deleteProduct = async (productId: string): Promise<void> => {
  await privateInstance.delete(`/products/${productId}`);
};

export const addCompany = async (
  categoryPath: string,
  companyName: string
): Promise<void> => {
  await privateInstance.post(`/categories/${categoryPath}/company`, {
    companyName,
  });
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
