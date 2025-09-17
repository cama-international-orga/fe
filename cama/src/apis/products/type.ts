export interface Products {
  productsId: string;
  productsImage: string;
  productsName: string;
}

export interface Company {
  companyId: string;
  companyName: string;
}

export interface CategoryDetail {
  thumbNail: string;
  companyLists: Company[];
  productsLists: Products[] | null;
  pageInfo: {
    totalPages: number;
  };
}

export interface CategoryProduct {
  companyId: string;
  companyName: string;
  productsId: string;
  productsName: string;
  productsImage: string;
  productWeight: number;
}
export interface UpdateSortWeights {
  productId: string;
  productWeight: number;
}

export interface ProductsSort {
  updateSortWeights: UpdateSortWeights[];
}

export interface ProductDetail {
  productsId: string;
  productsImage: string;
  productsName: string;
}
