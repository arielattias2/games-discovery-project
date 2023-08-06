import { Heading, Spinner } from "@chakra-ui/react";
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

  if (error) throw error;

  //name
  //text- desc
  //details
  //trailer video
  //screenshots

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>

      <GameDetailes game={game}></GameDetailes>
      <GameTrailer></GameTrailer>
      <GameScreenshots></GameScreenshots>
    </>
  );
};

export default GameDetailPage;
