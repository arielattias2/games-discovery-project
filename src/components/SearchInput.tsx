import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText); //selector, for the component to be dependet only on it (re render)
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<FaSearch />}></InputLeftElement>
        <Input
          width={"100%"}
          // width={[
          //   "120px", // 62em+
          //   "250px", // 48em-62em
          //   "500px", // 30em-48em
          //   "700px", // 0-30em
          // ]}
          ref={ref}
          borderRadius={20}
          variant={"filled"}
          type="text"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
