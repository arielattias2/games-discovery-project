import { useQuery } from "@tanstack/react-query";
import { toMs } from "ms-typescript";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: [`/games/${slug}`],
    queryFn: () => apiClient.get(slug),
    staleTime: toMs("24h"), //24 hours
  });
};
export default useGame;
