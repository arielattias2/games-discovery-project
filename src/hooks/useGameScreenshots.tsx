import { useQuery } from "@tanstack/react-query";
import { toMs } from "ms-typescript";
import { GameScreenshot } from "../entities/GameScreenshot";
import { Genre } from "../entities/Genre";
import APIClient, { FetchRes } from "../services/api-client";

const apiClient = new APIClient<Genre>("/games/screenshots");

const useGameScreenshots = (slug: string) => {
  return useQuery<FetchRes<GameScreenshot>, Error>({
    queryKey: [`/games/screenshots/${slug}`],
    queryFn: () => apiClient.get(slug),
    staleTime: toMs("24h"), //24 hours
  });
};
export default useGameScreenshots;
