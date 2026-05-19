import { publicInstance } from "../axios";
import { SearchResult } from "./type";

export const searchProducts = async (keyword: string): Promise<SearchResult> => {
  const response = await publicInstance.get(`/products/search`, {
    params: { keyword },
  });
  return response.data.data;
};
