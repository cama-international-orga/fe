import {
  addCategory, addCategoryDetail,
  deleteCategory, deleteCategoryDetail,
  editCategory, editCategoryDetail,
} from "../../../apis/main/categories";
import {
  CategoryDetailAddItem, CategoryDetailDeleteItem,
  CategoryDetailEditItem,
  CategoryEditItem,
  HeaderNavItem,
  Qna
} from "../../../apis/main/type";
import { toast } from "sonner";
import {sendQna} from "../../../apis/main/qna.ts";
export const useHeaderHook = () => {
  const handleAdd = async (category: Omit<HeaderNavItem, "categoryId" | "categoryDetails" >) => {
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

  const handleQna = async (qna: Omit<Qna, "qnaId">) => {
    console.log(qna);
    await sendQna(qna);
    toast.success("문의 전송이 완료되었습니다.");
  }

  const handleAddDetail = async (categoryDetail: Omit<CategoryDetailAddItem, "categoryDetailId">) => {
    console.log(categoryDetail);
    await addCategoryDetail(categoryDetail);
    toast.success("카테고리 디테일이 추가되었습니다.");
  };

  const handleEditDetail = async (categoryDetail: CategoryDetailEditItem) => {
    console.log(categoryDetail);
    await editCategoryDetail(categoryDetail);
    toast.success("카테고리 디테일이 수정되었습니다.")
  }

  const handleDeleteDetail = async (categoryDetail: CategoryDetailDeleteItem) => {
    await deleteCategoryDetail(categoryDetail);
    toast.success("카테고리가 삭제되었습니다.");
  };

  return { handleDelete, handleAdd, handleEdit, handleQna, handleAddDetail, handleEditDetail, handleDeleteDetail };


};
