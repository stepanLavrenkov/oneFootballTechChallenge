import AbstractApi from 'api/AbstractApi';
import { productModel, productModelRes } from 'api/types/types';

export class Products extends AbstractApi<productModel, productModelRes> {
  constructor() {
    const path = 'products';

    super(path);
  }
}
