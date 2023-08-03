import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchRes } from "../services/api-client";
import { toMs } from "ms-typescript";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: [`/games/${slug}`],
    queryFn: () => apiClient.get(slug),
    staleTime: toMs("24h"), //24 hours
  });
};
export default useGame;
