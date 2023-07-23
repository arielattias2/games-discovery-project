import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchRes } from "../services/api-client";
import { toMs } from "ms-typescript";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchRes<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: toMs("24h"), //24 hours
  });

export default usePlatforms;
