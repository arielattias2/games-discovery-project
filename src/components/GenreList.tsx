import { Heading, Text, UnorderedList } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  currentGenreId?: number;
}

const GenreList = ({ currentGenreId, onSelectGenre }: Props) => {
  // const { data, error, isLoading } = useGenres();
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
          <GenreItem
            setGenre={onSelectGenre}
            currentGenreId={currentGenreId}
            key={genre.id}
            genre={genre}
          ></GenreItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default GenreList;
