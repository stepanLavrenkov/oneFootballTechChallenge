import AbstractApi from 'api/AbstractApi';
import { serviceModel, serviceModelRes } from 'api/types/types';

export class Services extends AbstractApi<serviceModel, serviceModelRes> {
  constructor() {
    const path = 'services';

    super(path);
  }
}
