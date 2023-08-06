import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchRes } from "../services/api-client";
import { toMs } from "ms-typescript";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchRes<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: toMs("24h"), //24 hours
    initialData: genres,
  });
export default useGenres;
