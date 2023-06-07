import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  handleSelectSort: (p: String) => void;
  selectedSort: String | null;
}

const SortSelector = ({ selectedSort, handleSelectSort }: Props) => {
  const sortFields = [
    "name",
    "released",
    "added",
    "created",
    "updated",
    "rating",
    "metacritic",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Order by: ${selectedSort}`}
      </MenuButton>
      <MenuList>
        {sortFields.map((sortField) => (
          <MenuItem key={sortField} onClick={() => handleSelectSort(sortField)}>
            {sortField}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
