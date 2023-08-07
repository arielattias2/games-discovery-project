import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  gameSlug: string;
}

const GameScreenshots = ({ gameSlug }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(gameSlug);

  if (isLoading) return <Spinner></Spinner>;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((f) => (
          <Image key={f.id} src={f.image}></Image>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
