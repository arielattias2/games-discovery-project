import axios, { AxiosRequestConfig } from "axios";

export interface FetchRes<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1133c794f0ce46c48bccdbd43da99250",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchRes<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (slug: string) =>
    axiosInstance.get<T>(`${this.endpoint}/${slug}`).then((res) => res.data);
}

export default APIClient;
