import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <Flex justifyContent="center" width="100%" height={100}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image alt="Logo" src="/images/logo.svg" width={184} height={45} />
      </Box>
    </Flex>
  );
};

export default Header;
