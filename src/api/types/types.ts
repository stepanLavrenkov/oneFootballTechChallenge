/* *************************************************
    This file is generated automatically, do not update!
    ************************************************* */
type responseFields = {
  id: number;
  createdAt: string;
  updatedAt: string;
};

export type getAllResponse<T> = {
  total: number;
  limit: number;
  skip: number;
  data: T;
};
export type errorModel = {
  name: string;
  message: string;
  code: number;
  className: string;
  errors: Record<string, any>;
};
export type productModel = {
  name: string;
  type: string;
  price?: number;
  shipping?: number;
  upc: string;
  description: string;
  manufacturer?: string;
  model: string;
  url?: string;
  image?: string;
};
export type productModelRes = productModel & responseFields;
export type storeModel = {
  name: string;
  type?: string;
  address: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  lat?: number;
  lng?: number;
  hours?: string;
  services?: object;
};
export type storeModelRes = storeModel & responseFields;
export type serviceModel = {
  name: string;
};
export type serviceModelRes = serviceModel & responseFields;
export type categoryModel = {
  name: string;
  id: string;
};
export type categoryModelRes = categoryModel & responseFields;
