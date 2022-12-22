import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import Container from 'lib/container';
import { validate, DtoClass } from 'lib/validate';

export default class Requester {
  private instance: AxiosInstance;
  private baseURL: string = '';

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.instance = axios.create({ baseURL: this.baseURL });
  }

  private async request<Response, Request>(
    config: AxiosRequestConfig<Request>,
    body: Request,
  ) {
    const fetcher = (data: Request) =>
      this.instance.request<Response, AxiosResponse<Response, Request>>({
        ...config,
        data,
      });

    const axiosResponse = await fetcher(body);

    return Container.containify(axiosResponse);
  }

  protected async validateDto<T>(dto: DtoClass<T>, data: Record<string, any>) {
    const errors = await validate<T>(dto, data);

    return { isError: errors.length > 0, error: errors };
  }

  protected get<Response, Request>(config: AxiosRequestConfig<Request>) {
    const { data } = config;
    return this.request<Response, Request>(
      {
        ...config,
        method: config.method,
      },
      data,
    );
  }
}
