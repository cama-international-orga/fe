export interface Products {
  productsId: string;
  productsImage: string;
  productsName: string;
}

export interface SidebarCategory {
  categoryDetailId: string;
  categoryDetailName: string;
}

export interface Company {
  companyId: string;
  companyName: string;
}

export interface Company1 {
  companyId: string;
  companyName: string;
  companyImage: string;
}


export interface CompanyImage extends Company {
  companyImage: string;
}
export interface CompanyDetails {
  categoryDetailName: string;
  companyAllLists: Company1[]
}

export interface CategoryDetail {
  thumbNail: string;
  categoryDetailId: string;
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
