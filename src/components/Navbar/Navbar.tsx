import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import React from "react";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Image src="/images/redditlogo.png" />
      {/* Directory */}
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
