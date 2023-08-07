import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameScreenshots = ({ game }: Props) => {
  return <div>GameScreenshots {game.id} </div>;
};

export default GameScreenshots;
