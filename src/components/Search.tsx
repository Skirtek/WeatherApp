import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { debounce } from "lodash";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchCities = () => {
    console.log("i'm searching");
  };

  const debouncedSearch = useMemo(() => debounce(searchCities, 2000), []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  useEffect(() => {
    if (searchTerm) {
      debouncedSearch();
    }
  }, [searchTerm, debouncedSearch]);

  return (
    <div>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="text"
          value={searchTerm}
          placeholder="Find your city..."
          onChange={onSearchChange}
        />
      </InputGroup>
    </div>
  );
};
