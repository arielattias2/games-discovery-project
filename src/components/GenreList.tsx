import { Heading, Text, UnorderedList } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  currentGenre: Genre | null;
}

const GenreList = ({ currentGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Heading fontSize={"30px"} marginBottom={3} marginX={2}>
        Genres
      </Heading>
      {error && <Text>{error}</Text>}
      <UnorderedList>
        {isLoading &&
          skeletons.map((skeleton) => <GenreItemSkeleton key={skeleton} />)}
        {data.map((genre) => (
          <GenreItem
            setGenre={onSelectGenre}
            currentGenre={currentGenre}
            key={genre.id}
            genre={genre}
          ></GenreItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default GenreList;
