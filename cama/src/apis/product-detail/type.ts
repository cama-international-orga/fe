export interface ProductDetail {
  categoryPath: string;
  companyId: string;
  companyImage: string;
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
