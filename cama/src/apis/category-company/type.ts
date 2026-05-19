export interface CategoryCompany {
    companyId: string;
    companyName: string;
    companyImage: string;
}
export interface CategoryDetails {
    categoryDetailId: string;
    categoryDetailName: string;
}
export interface CategoryDetail {
    categoryDetailName: string;
    companyAllLists: CategoryCompany[]
}