import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import Container from 'lib/container';

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

  get<Response, Request>(config: AxiosRequestConfig<Request>) {
    const { data } = config;
    const fetcher = this.request<Response, Request>(
      {
        ...config,
        method: config.method,
      },
      data,
    );
  }
}
