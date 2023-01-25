import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import React from "react";
import RightContent from "./RightContent/RightContent";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Image src="/images/redditlogo.png" />
      {/* Directory */}
      <SearchInput />
      <RightContent />
    </Flex>
  );
};
export default Navbar;
