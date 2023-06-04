import React from "react";
import { Genre } from "../hooks/useGenres";
import { HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  return (
    <HStack marginBottom={3}>
      <Image boxSize={"40px"} borderRadius={10} src={genre.image_background} />
      <Text>{genre.name}</Text>
    </HStack>
  );
};

export default GenreItem;
