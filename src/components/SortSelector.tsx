import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  handleSelectSort: (p: String) => void;
  selectedSort: String | null;
}

const SortSelector = ({ selectedSort, handleSelectSort }: Props) => {
  const sortFields = [
    { value: "", label: "Revelance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-added", label: "Date added" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
    { value: "created", label: "Date created" },
  ];

  const currentSortOrder = sortFields.find((o) => o.value === selectedSort);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label}
      </MenuButton>
      <MenuList>
        {sortFields.map((sortField) => (
          <MenuItem
            key={sortField.value}
            onClick={() => handleSelectSort(sortField.value)}
          >
            {sortField.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
