import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <NavBar />
        </GridItem>
        <Show above="md">
          <GridItem area={"aside"} paddingX={1}>
            <GenreList
              currentGenre={selectedGenre}
              setGenre={setSelectedGenre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector
            handleSelectPlatfrom={(p) => console.log(p)}
          ></PlatformSelector>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
