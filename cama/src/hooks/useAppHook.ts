import { useEffect, useState } from "react";
import { getCategories } from "../apis/main/categories";
import { HeaderNavItem } from "../apis/main/type";
import { useAuth } from "../contexts";

export const useAppHook = () => {
  const [navItems, setNavItems] = useState<HeaderNavItem[]>([]);
  const { isLoggedIn } = useAuth();
  const fetchNavItems = async () => {
    const navItems = await getCategories();
    setNavItems(navItems);
  };
  // 카테고리 목록 가져오기
  useEffect(() => {
    fetchNavItems();
  }, [isLoggedIn]);

  return { navItems, isLoggedIn, fetchNavItems };
};
