import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{ base: `"main"`, md: `"aside main"` }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="md">
          <GridItem area={"aside"} paddingX={1} position="sticky" zIndex={900}>
            <GenreList></GenreList>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box paddingLeft={2}>
            <GameHeading />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector></PlatformSelector>
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
