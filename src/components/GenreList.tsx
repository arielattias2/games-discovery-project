import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { ListItem, UnorderedList } from "@chakra-ui/react";

interface Genre {
  id: number;
  name: string;
  image_background: string;
  games_count: number;
}
interface FetchGenresRes {
  count: number;
  results: Genre[];
}

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const controller = new AbortController();

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGenresRes>("/genres")
      .then((res) => {
        console.log(res.data.results);
        setError("");
        setLoading(false);
        setGenres(res.data.results);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      // console.log("cancled");
      controller.abort();
    };
  }, []);

  return (
    <UnorderedList>
      {genres.map((genre) => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default GenreList;
