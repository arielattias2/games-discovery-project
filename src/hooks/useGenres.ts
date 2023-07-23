import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchRes } from "../services/api-client";
import { toMs } from "ms-typescript";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchRes<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: toMs("24h"), //24 hours
    initialData: genres,
  });
export default useGenres;
