import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((t, page) => t + page.results.length, 0) || 0;
  console.log("d p : ", data?.pages);

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={hasNextPage || false}
        next={() => fetchNextPage()}
        loader={<Spinner marginY={5}></Spinner>}
      >
        <SimpleGrid
          padding={"10px"}
          key={"1"}
          columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
          spacing={6}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
          {data?.pages.map((p, i) => (
            <React.Fragment key={i}>
              {p.results.map((game) => {
                return (
                  <GameCardContainer key={game.id}>
                    <GameCard key={game.id} game={game} />
                  </GameCardContainer>
                );
              })}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
