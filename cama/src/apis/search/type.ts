export interface SearchProduct {
  productsId: string;
  productsName: string;
  productsImage: string;
  categoryPath: string;
  categoryDetailId: string;
  companyId: string;
  companyName: string;
}

export interface SearchResult {
  products: SearchProduct[];
  totalCount: number;
}
