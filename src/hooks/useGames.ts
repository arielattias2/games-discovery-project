import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "./../App";
import { Genre } from "./useGenres";
import apiClient, { FetchRes } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>("/games", [gameQuery], {
//     params: {
//       genres: gameQuery.genre?.id,
//       parent_platforms: gameQuery.platform?.id,
//       ordering: gameQuery.sortOrder,
//       search: gameQuery.searchText,
//     },
//   });

const useGames = (gameQuery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return apiClient
        .get<FetchRes<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => {
          console.log(res);
          return res.data.results;
        });
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });

export default useGames;
