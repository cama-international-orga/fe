export interface HeaderNavItem {
  categoryId: string;
  categoryName: string;
  categoryPath?: string;
  thumbNail: File | null;
}

export interface CategoryContainerProps {
  categoryName: string;
  categoryPath: string;
  isLast: boolean;
  onClickLast?: () => void;
  handleDelete?: () => void;
  isLoggedIn: boolean;
}
