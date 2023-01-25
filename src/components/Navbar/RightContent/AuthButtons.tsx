import { Button } from "@chakra-ui/react";
import React from "react";

const AuthButtons: React.FC = () => {
  return (
    <>
      <Button
        variant="outline"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        // onClick={() => {}}
      >
        Log In
      </Button>
      <Button
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        // onClick={() => {}}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
