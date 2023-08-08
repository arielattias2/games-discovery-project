import { useQuery } from "@tanstack/react-query";
import { toMs } from "ms-typescript";
import Trailer from "../entities/Trailer";
import APIClient, { FetchRes } from "../services/api-client";

const useGameTrailer = (slug: string) => {
  const apiClient = new APIClient<Trailer>(`/games/${slug}/movies`);

  return useQuery<FetchRes<Trailer>, Error>({
    queryKey: ["trailers", slug],
    queryFn: apiClient.getAll,
    staleTime: toMs("24h"), //24 hours
  });
};
export default useGameTrailer;
