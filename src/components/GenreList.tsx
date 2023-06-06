import { Text, UnorderedList } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreItem from "./GenreItem";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  setGenre: (genre: Genre) => void;
}

const GenreList = (props: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <UnorderedList>
        {isLoading &&
          skeletons.map((skeleton) => <GenreItemSkeleton key={skeleton} />)}
        {data.map((genre) => (
          <GenreItem
            setGenre={props.setGenre}
            key={genre.id}
            genre={genre}
          ></GenreItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default GenreList;
