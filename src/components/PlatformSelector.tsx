import { Select } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  handleSelectPlatfrom: (value: string) => void;
}

const PlatformSelector = ({ handleSelectPlatfrom }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Select
      onChange={(e) => handleSelectPlatfrom(e.target.value)}
      width={"30%"}
      placeholder="Select platform: "
    >
      {data.map((platform) => (
        <option value={platform.name}>{platform.name}</option>
      ))}
    </Select>
  );
};

export default PlatformSelector;
