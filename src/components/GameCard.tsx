import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  LinkBox,
} from "@chakra-ui/react";
import Game from "../entities/Game";

import { Link } from "react-router-dom";
import getCropedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Link to={"/games/" + game.slug}>
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
      </Link>
    </>
  );
};

export default GameCard;
