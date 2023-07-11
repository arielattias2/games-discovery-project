import { Platform } from "./useGames";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchRes } from "../services/api-client";

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents", []);

const usePlatforms = () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<FetchRes<Platform>>("/platforms/lists/parents")
        .then((res) => {
          return res.data.results;
        });
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });

export default usePlatforms;
