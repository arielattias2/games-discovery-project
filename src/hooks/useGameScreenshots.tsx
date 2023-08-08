import { useQuery } from "@tanstack/react-query";
import GameScreenshot from "../entities/GameScreenshot";
import APIClient, { FetchRes } from "../services/api-client";

const useGameScreenshots = (slug: string) => {
  const apiClient = new APIClient<GameScreenshot>(`/games/${slug}/screenshots`);

  return useQuery<FetchRes<GameScreenshot>, Error>({
    queryKey: ["screenshots", slug],
    queryFn: apiClient.getAll,
  });
};
export default useGameScreenshots;
