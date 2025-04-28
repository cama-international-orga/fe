export interface Product {
  id: string;
  image: string;
  name: string;
}

export interface Company {
  companyId: string;
  companyName: string;
}

//TODO-[productLists] 추후 수정 필요
export interface CategoryDetail {
  thumbNail: string;
  companyLists: Company[];
  productLists: Product[] | null;
}
