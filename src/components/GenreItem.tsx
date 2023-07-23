import { Genre } from "../hooks/useGenres";
import { Button, HStack, Image } from "@chakra-ui/react";

interface Props {
  genre: Genre;
  setGenre: (genre: Genre) => void;
  currentGenreId?: number;
}

const GenreItem = ({ genre, setGenre, currentGenreId }: Props) => {
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
        onClick={() => setGenre(genre)}
        variant={"link"}
      >
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreItem;
