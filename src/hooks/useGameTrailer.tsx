import { useQuery } from "@tanstack/react-query";
import { toMs } from "ms-typescript";
import { GameTrailer } from "../entities/GameTrailer";
import { Genre } from "../entities/Genre";
import APIClient, { FetchRes } from "../services/api-client";

const apiClient = new APIClient<Genre>("/games/movies");

const useGameTrailer = (slug: string) => {
  return useQuery<FetchRes<GameTrailer>, Error>({
    queryKey: [`/games/movies/${slug}`],
    queryFn: () => apiClient.get(slug),
    staleTime: toMs("24h"), //24 hours
  });
};
export default useGameTrailer;
