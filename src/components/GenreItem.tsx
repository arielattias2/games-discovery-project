import React from "react";
import { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  genre: Genre;
  setGenre: (genre: Genre) => void;
}

const GenreItem = ({ genre, setGenre }: Props) => {
  return (
    <HStack marginBottom={3}>
      <Image boxSize={"40px"} borderRadius={10} src={genre.image_background} />
      <Button onClick={() => setGenre(genre)} variant={"link"}>
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreItem;
