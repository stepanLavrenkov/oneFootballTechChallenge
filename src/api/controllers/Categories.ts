import AbstractApi from 'api/AbstractApi';
import { categoryModel, categoryModelRes } from 'api/types/types';

export class Categories extends AbstractApi<categoryModel, categoryModelRes> {
  constructor() {
    const path = 'categories';

    super(path);
  }
}
