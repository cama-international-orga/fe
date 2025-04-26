import { addCategory, deleteCategory } from "../../../apis/main/categories";
import { HeaderNavItem } from "../../../apis/main/type";
import { toast } from "sonner";
export const useHeaderHook = () => {
  const handleAdd = async (category: Omit<HeaderNavItem, "categoryId">) => {
    console.log(category);
    await addCategory(category);
    toast.success("카테고리가 추가되었습니다.");
  };

  const handleDelete = async (categoryId: string) => {
    await deleteCategory(categoryId);
    toast.success("카테고리가 삭제되었습니다.");
  };

  return { handleDelete, handleAdd };
};
