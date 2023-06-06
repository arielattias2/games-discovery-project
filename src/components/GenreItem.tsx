import React from "react";
import { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  genre: Genre;
  setGenre: (genre: Genre) => void;
  currentGenre: Genre | null;
}

const GenreItem = ({ genre, setGenre, currentGenre }: Props) => {
  return (
    <HStack marginBottom={3}>
      <Image boxSize={"40px"} borderRadius={10} src={genre.image_background} />
      <Button
        fontWeight={currentGenre?.id === genre.id ? "bold" : ""}
        onClick={() => setGenre(genre)}
        variant={"link"}
      >
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreItem;
