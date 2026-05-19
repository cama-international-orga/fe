import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchProducts } from "../../../apis/search/search";
import { SearchProduct } from "../../../apis/search/type";

const useSearchHook = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q") || "";

  const [products, setProducts] = useState<SearchProduct[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchResults = useCallback(async () => {
    if (!keyword.trim()) {
      setProducts([]);
      setTotalCount(0);
      return;
    }
    setIsLoading(true);
    try {
      const result = await searchProducts(keyword);
      setProducts(result.products);
      setTotalCount(result.totalCount);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  }, [keyword]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  return { products, totalCount, keyword, isLoading };
};

export default useSearchHook;
