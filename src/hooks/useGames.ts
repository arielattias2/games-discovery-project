import useData from "./useData";
import { Genre } from "./useGenres";

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

const useGames = (
  genre: Genre | null,
  platform: Platform | null,
  sortOrder: String
) =>
  useData<Game>("/games", [genre, platform, sortOrder], {
    params: {
      genres: genre?.id,
      parent_platforms: platform?.id,
      ordering: `${sortOrder}`,
    },
  });

export default useGames;
