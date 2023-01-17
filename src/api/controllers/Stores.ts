import AbstractApi from 'api/AbstractApi';
import { storeModel, storeModelRes } from 'api/types/types';

export class Stores extends AbstractApi<storeModel, storeModelRes> {
  constructor() {
    const path = 'stores';

    super(path);
  }
}
