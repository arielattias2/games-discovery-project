import { Box, Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: String;
  searchText: String;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, md: `"nav nav" "aside main"` }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearch={(t) => setGameQuery({ ...gameQuery, searchText: t })}
          />
        </GridItem>
        <Show above="md">
          <GridItem area={"aside"} paddingX={1}>
            <Text marginX={4} marginBottom={2} fontSize={"20px"}></Text>
            <GenreList
              currentGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              ></PlatformSelector>
              <SortSelector
                selectedSort={gameQuery.sortOrder}
                handleSelectSort={(s) => {
                  setGameQuery({ ...gameQuery, sortOrder: s });
                  console.log(s);
                }}
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
