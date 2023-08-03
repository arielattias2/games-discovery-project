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
import { Link, useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <LinkBox>
        <Card>
          <Image src={getCropedImageUrl(game.background_image)} />

          <CardBody>
            <Link to={"/games/" + game.slug}>
              <Heading fontSize="2xl">{game.name}</Heading>
            </Link>
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
