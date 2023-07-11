import axios from "axios";

export interface FetchRes<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1133c794f0ce46c48bccdbd43da99250",
  },
});
