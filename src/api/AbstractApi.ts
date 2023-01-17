import axios, { Method } from 'axios';
import config from 'configs/config';
import { getAllResponse } from './types/types';

export default class AbstractApi<inputModel, responseModel> {
  constructor(private defaultPath: string) {}

  private async request<T>(
    path: string,
    method: Method,
    body?: Partial<inputModel> | inputModel
  ): Promise<T> {
    return axios
      .request<T>({
        method,
        url: config.baseUrl + path,
        data: body
      })
      .catch((err) => {
        const expectedErrorStatusCodes = [400, 404];

        if (expectedErrorStatusCodes.includes(err.response.data.code)) {
          return err.response;
        }

        throw new Error(
          `Request has failed with status code: ${err.response.data.code} and message: ${err.response.data.message}`
        );
      })
      .then((res) => res.data);
  }

  async getAll<T = getAllResponse<responseModel[]>>(filters?: {
    limit?: number;
    skip?: number;
  }) {
    let path = this.defaultPath;

    if (filters) {
      for (const [key, value] of Object.entries(filters)) {
        path += `?$${key}=${value}`;
      }
    }

    return this.request<T>(path, 'GET');
  }

  async getOne<T = responseModel>(id: number) {
    return this.request<T>(this.defaultPath + `/${id}`, 'GET');
  }

  async create<T = responseModel>(body: inputModel) {
    return this.request<T>(this.defaultPath, 'POST', body);
  }

  async update<T = responseModel>(id: number, body: Partial<inputModel>) {
    return this.request<T>(this.defaultPath + `/${id}`, 'PATCH', body);
  }

  async delete<T = responseModel>(id: number) {
    return this.request<T>(this.defaultPath + `/${id}`, 'DELETE');
  }
}
