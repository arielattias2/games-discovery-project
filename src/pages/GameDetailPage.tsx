import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  // const gameDescription = fullText
  //   ? game?.description_raw
  //   : game?.description_raw.slice(0, 300);

  if (isLoading) return <Spinner></Spinner>;

  if (error) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      {/* <Text>
        {gameDescription}...{" "}
        <Button onClick={() => setFullText(!fullText)}>
          {fullText ? "Show less" : "Show more"}
        </Button>
      </Text> */}
    </>
  );
};

export default GameDetailPage;
