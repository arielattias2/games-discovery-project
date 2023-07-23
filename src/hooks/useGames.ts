import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "./../App";
import { Genre } from "./useGenres";
import APIClient, { FetchRes } from "../services/api-client";
import { Platform } from "./usePlatforms";
import { toMs } from "ms-typescript";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchRes<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      return apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
    },
    getNextPageParam: (lasePage, allPages) => {
      return lasePage.next ? allPages.length + 1 : undefined;
    },
    staleTime: toMs("24h"), //24 hours
  });

export default useGames;
