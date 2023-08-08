import { Spinner } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  gameSlug: string;
}

const GameTrailer = ({ gameSlug }: Props) => {
  const { data, isLoading, error } = useGameTrailer(gameSlug);

  if (isLoading) return <Spinner></Spinner>;

  if (error) return null;

  console.log(data?.results);
  const first = data?.results[0];

  return first ? (
    <video
      src={first.data[480]}
      poster={first.preview}
      controls
      style={{ width: "100%" }}
    />
  ) : null;
};

export default GameTrailer;
