import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  isVisibleGoBack: boolean;
}

const Header = ({ isVisibleGoBack }: Props) => {
  const { back } = useRouter();

  return (
    <Flex alignItems="center" height={{ base: "50px", lg: "100px" }}>
      {isVisibleGoBack && (
        <Box
          onClick={() => back()}
          marginLeft={{ base: "6px", lg: "12px" }}
          style={{ cursor: "pointer" }}
        >
          <Image
            src="/goBack.svg"
            alt="Go Back"
            width={{ base: "18px", lg: "32px" }}
            height={{ base: "18px", lg: "32px" }}
          />
        </Box>
      )}
      <Spacer />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          alt="Logo"
          src="/images/logo.svg"
          width={{ base: "82px", lg: "184px" }}
          height={{ base: "20px", lg: "45px" }}
        />
      </Box>
      <Spacer />
      <Box />
    </Flex>
  );
};

export default Header;
