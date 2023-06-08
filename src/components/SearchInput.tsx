import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  searchText: String;
  onSearch: (search: String) => void;
}

const SearchInput = ({ searchText, onSearch }: Props) => {
  return (
    <InputGroup onChange={(e) => onSearch(e.target.value)}>
      <InputLeftElement pointerEvents="none">
        <FaSearch />
      </InputLeftElement>
      <Input
        borderRadius={20}
        variant={"filled"}
        type="text"
        placeholder="Search games..."
      />
    </InputGroup>
  );
};

export default SearchInput;
