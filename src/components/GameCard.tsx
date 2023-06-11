import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCropedImageUrl(game.background_image)} />

        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={
                game.parent_platforms
                  ? game.parent_platforms.map((p) => p.platform)
                  : []
              }
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
