export interface HeaderNavItem {
  categoryId: string;
  categoryName: string;
  categoryPath?: string;
  thumbNail: File | null | string;
}

export interface CategoryEditItem {
  categoryName: string;
  categoryPath: string;
  categoryBeforePath: string | undefined;
  thumbNail: File | null | string;
}

export interface CategoryContainerProps {
  categoryName: string;
  categoryPath: string;
  isLast: boolean;
  onClickLast?: () => void;
  handleDelete?: () => void;
  isLoggedIn: boolean;
  handleEdit?: () => void;
}
