import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchRes<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  deps: any[],
  requestConfig?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const controller = new AbortController();

  useEffect(
    () => {
      setLoading(true);
      apiClient
        .get<FetchRes<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          console.log(res.data.results);
          setError("");
          setLoading(false);
          setData(res.data.results);
        })
        .catch((err) => {
          setLoading(false);
          if (err instanceof CanceledError) return;
          setError(err.message);
        });

      return () => {
        // console.log("cancled");
        //controller.abort();
      };
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
