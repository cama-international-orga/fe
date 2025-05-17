export interface ProductDetail {
  categoryPath: string;
  companyId: string;
  model: {
    productName: string;
    modelImages: {
      modelImage: string;
    }[];
  };
  information: {
    infoKey: string;
    infoValue: string;
  }[];
  detailImages: {
    detailImage: string;
  }[];
}
