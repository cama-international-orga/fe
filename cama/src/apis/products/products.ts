import { publicInstance, privateInstance } from "../axios";
import { CategoryDetail } from "./type";
export const getProducts = async (
  categoryId: string,
  companyId: string
): Promise<CategoryDetail> => {
  const response = await publicInstance.get(
    `/categories/${categoryId}/company/${companyId}`
  );
  console.log(response);
  return response.data.data;
};

export const deleteProduct = async (productId: string): Promise<void> => {
  await privateInstance.delete(`/categories/${productId}`);
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
