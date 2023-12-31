import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameDetailes from "../components/GameDetailes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner></Spinner>;

  if (error || !game) throw error;

  //name
  //text- desc
  //details
  //trailer video
  //screenshots

  return (
    <>
      {/* <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameDetailes game={game}></GameDetailes>
      <GameTrailer gameSlug={game.slug}></GameTrailer>
      <GameScreenshots gameSlug={game.slug}></GameScreenshots> */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameDetailes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameSlug={game.slug} />
          <GameScreenshots gameSlug={game.slug} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
