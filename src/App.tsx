import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, md: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem bg="pink.300" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
