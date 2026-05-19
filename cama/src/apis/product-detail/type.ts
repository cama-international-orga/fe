export interface ProductDetail {
  categoryPath: string;
  categoryDetailId: number;
  categoryDetailName: string;
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
  specificationImages: {
    specImage: string;
  }[];
  installImages: {
    installImage: string;
  }[];
}
