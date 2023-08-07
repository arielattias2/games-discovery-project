import { useQuery } from "@tanstack/react-query";
import { toMs } from "ms-typescript";
import { GameScreenshot } from "../entities/GameScreenshot";
import APIClient, { FetchRes } from "../services/api-client";

//const apiClient = new APIClient<Genre>("/games/screenshots");

const useGameScreenshots = (slug: string) => {
  // return useQuery<FetchRes<GameScreenshot>, Error>({
  //   queryKey: [`/games/screenshots/${slug}`],
  //   queryFn: () => apiClient.get(slug),
  //   staleTime: toMs("24h"), //24 hours

  const apiClient = new APIClient<GameScreenshot>(`/games/${slug}/movies`);

  return useQuery<FetchRes<GameScreenshot>, Error>({
    queryKey: ["screenshots", slug],
    queryFn: apiClient.getAll,
    staleTime: toMs("24h"), //24 hours
  });
};
export default useGameScreenshots;
