export interface Products {
  productsId: string;
  productsImage: string;
  productsName: string;
}

export interface Company {
  companyId: string;
  companyName: string;
}

//TODO-[productLists] 추후 수정 필요
export interface CategoryDetail {
  thumbNail: string;
  companyLists: Company[];
  productsLists: Products[] | null;
  pageInfo: {
    totalPages: number;
  };
}
