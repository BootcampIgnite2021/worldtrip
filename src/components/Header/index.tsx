import { Box, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  isVisibleGoBack: boolean;
}

const Header = ({ isVisibleGoBack }: Props) => {
  const { back } = useRouter();

  return (
    <Flex alignItems="center" height={100}>
      {isVisibleGoBack && (
        <Box
          onClick={() => back()}
          marginLeft={12}
          style={{ cursor: "pointer" }}
        >
          <Image src="/goBack.svg" alt="Go Back" width={32} height={32} />
        </Box>
      )}
      <Spacer />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={100}
      >
        <Image alt="Logo" src="/images/logo.svg" width={184} height={45} />
      </Box>
      <Spacer />
      <Box />
    </Flex>
  );
};

export default Header;
