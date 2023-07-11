import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchRes } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  games_count: number;
}

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient.get<FetchRes<Genre>>("/genres").then((res) => {
        console.log(res);
        return res.data.results;
      });
    },
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: genres,
  });
export default useGenres;
