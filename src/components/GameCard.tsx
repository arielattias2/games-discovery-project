import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropedImageUrl from "../services/image-url";
import { useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <LinkBox>
        <Card
          onClick={() => navigate(`/games/${game.name.replace("%20", " ")}`)}
        >
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
      </LinkBox>
    </>
  );
};

export default GameCard;
