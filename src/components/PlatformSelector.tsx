import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  handleSelectPlatfrom: (p: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  handleSelectPlatfrom,
  selectedPlatform,
}: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => handleSelectPlatfrom(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
