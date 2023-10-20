import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class HttpService {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://127.0.0.1:5000/api",
    });
  }
  request = <T, R = T>(requestConfig: AxiosRequestConfig): Promise<R> =>
    this.httpClient.request(requestConfig).then(({ data }) => data);
}

export const httpService = new HttpService();
