import {
  HStack,
  Switch,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [isSmDevice] = useMediaQuery("(max-width: 480px)");

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      {!isSmDevice && <Text whiteSpace={"nowrap"}>Dark Mode</Text>}
    </HStack>
  );
};

export default ColorModeSwitch;
