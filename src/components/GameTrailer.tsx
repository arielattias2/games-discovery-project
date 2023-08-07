import ReactPlayer from "react-player";
import useGameTrailer from "../hooks/useGameTrailer";
import { Spinner } from "@chakra-ui/react";

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
      {/* <video src={first.data[480]} poster={first.preview} controls /> */}
      <ReactPlayer
        url={first.data[480]}
        light={first.preview}
        playing={true}
        controls
      />
    </>
  ) : null;

  // if (!first) return null;

  // const url = first.data[480];
  // const preview = first.preview;
  // console.log(url);
  // return (
  //   <>
  //     <video src={url} poster={preview} controls></video>
  //     {/* <ReactPlayer url={url}></ReactPlayer> */}
  //   </>
  // );
};

export default GameTrailer;
