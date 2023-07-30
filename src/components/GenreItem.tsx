import { Genre } from "../hooks/useGenres";
import { Button, HStack, Image } from "@chakra-ui/react";
import useGameQueryStore from "../store";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  const currentGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  return (
    <HStack marginBottom={3}>
      <Image
        objectFit={"cover"}
        boxSize={"40px"}
        borderRadius={10}
        src={genre.image_background}
      />
      <Button
        whiteSpace={"normal"}
        textAlign="left"
        fontWeight={currentGenreId === genre.id ? "bold" : ""}
        onClick={() => setGenreId(genre.id)}
        variant={"link"}
      >
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreItem;
