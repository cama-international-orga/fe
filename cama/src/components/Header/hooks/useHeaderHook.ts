import {
  addCategory,
  deleteCategory,
  editCategory,
} from "../../../apis/main/categories";
import { CategoryEditItem, HeaderNavItem } from "../../../apis/main/type";
import { toast } from "sonner";
export const useHeaderHook = () => {
  const handleAdd = async (category: Omit<HeaderNavItem, "categoryId">) => {
    console.log(category);
    await addCategory(category);
    toast.success("카테고리가 추가되었습니다.");
  };

  const handleEdit = async (category: CategoryEditItem) => {
    console.log(category);
    await editCategory(category);
    toast.success("카테고리가 수정되었습니다.");
  };

  const handleDelete = async (categoryId: string) => {
    await deleteCategory(categoryId);
    toast.success("카테고리가 삭제되었습니다.");
  };

  return { handleDelete, handleAdd, handleEdit };
};
