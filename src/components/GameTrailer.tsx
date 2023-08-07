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
    <>
      <video
        src={first.data[480]}
        poster={first.preview}
        controls
        style={{ width: "100%", height: "100%" }}
      />
      {/* <div className="player-video"> */}
      {/* <ReactPlayer
        url={first.data[480]}
        light={first.preview}
        playing={true}
        controls
        width="100%"
        height="100%"
      /> */}
      {/* </div> */}
    </>
  ) : null;
};

export default GameTrailer;
