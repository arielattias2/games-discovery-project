import { Heading, Text, UnorderedList } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreItem from "./GenreItem";
import GenreItemSkeleton from "./GenreItemSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Heading fontSize={"30px"} marginBottom={4} marginX={2}>
        Genres
      </Heading>
      {error && <Text>{error.message}</Text>}
      <UnorderedList>
        {isLoading &&
          skeletons.map((skeleton) => <GenreItemSkeleton key={skeleton} />)}
        {data?.results.map((genre) => (
          <GenreItem key={genre.id} genre={genre}></GenreItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default GenreList;
