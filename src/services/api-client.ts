import axios, { AxiosRequestConfig } from "axios";

export interface FetchRes<T> {
  count: number;
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
      .then((res) => res.data.results);
  };
}

export default APIClient;
