import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class HttpService {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://dusantopic-api.onrender.com",
    });
  }
  request = <T, R = T>(requestConfig: AxiosRequestConfig): Promise<R> =>
    this.httpClient.request(requestConfig).then(({ data }) => data);
}

export const httpService = new HttpService();
