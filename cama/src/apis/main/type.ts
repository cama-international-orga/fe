export interface HeaderNavItem {
    categoryId: string;
    categoryName: string;
    categoryPath?: string;
    categoryDetails: {
        categoryDetailId: string;
        categoryDetailName: string;
    }[];
}
export interface CategoryDetailAddItem {
    categoryPath: string;
    categoryDetailId: string;
    categoryDetailName: string;
}
export interface CategoryEditItem {
    categoryName: string;
    categoryPath: string;
    categoryBeforePath: string | undefined;
}

export interface CategoryDetailEditItem {
    categoryPath: string;
    categoryDetailId: string;
    categoryDetailName: string;
}

export interface CategoryDetailDeleteItem {
    categoryPath: string;
    categoryDetailId: string;
}

export interface CategoryContainerProps {
    categoryId: string,
    categoryName: string,
    categoryPath: string,
    isLast: boolean,
    onClickLast?: () => void,
    handleDelete?: () => void,
    isLoggedIn: boolean,
    handleEdit?: () => void,
    categoryDetails?: {
      categoryDetailId: string,
      categoryDetailName: string
    }[],
    dropdownDirection?: 'down' | 'right',
}

export interface Qna {
    userMail: string;
    userPhoneNumber: string;
    userCompany: string;
    mailTitle: string;
    mailContent: string;
}
