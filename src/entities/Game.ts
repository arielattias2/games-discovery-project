import { Genre } from "./Genre";
import { Platform } from "./Platform";

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  description_raw: string;
}
