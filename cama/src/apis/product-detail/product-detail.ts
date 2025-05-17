import { publicInstance } from "../axios";
import { ProductDetail } from "./type";

export const getProduct = async (productId: string): Promise<ProductDetail> => {
  const response = await publicInstance.get(`/products/${productId}`);
  return response.data.data;
};
