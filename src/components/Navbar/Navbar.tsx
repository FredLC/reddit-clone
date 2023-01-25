import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Image src="/images/redditlogo.png" />
      <SearchInput />
      {/* Directory */}
      {/* RightContent */}
    </Flex>
  );
};
export default Navbar;
