export interface Product {
  id: string;
  image: string;
  name: string;
}

export interface CompanyProps {
  companyId: string;
  companyName: string;
}

//TODO-[productLists] 추후 수정 필요
export interface CategoryDetail {
  thumbNail: string;
  companyLists: CompanyProps[];
  productLists: Product[] | null;
}
