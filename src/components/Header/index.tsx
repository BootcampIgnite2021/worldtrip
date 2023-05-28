import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  isVisibleGoBack: boolean;
}

const Header = ({ isVisibleGoBack }: Props) => {
  return (
    <Flex alignItems="center" height={{ base: "50px", lg: "100px" }}>
      {isVisibleGoBack && (
        <Box
          marginLeft={{ base: "6px", lg: "12px" }}
          style={{ cursor: "pointer" }}
        >
          <Link href="/">
            <Image
              src="/goBack.svg"
              alt="Go Back"
              width={{ base: "18px", lg: "32px" }}
              height={{ base: "18px", lg: "32px" }}
            />
          </Link>
        </Box>
      )}
      <Spacer />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link href="/">
          <Image
            alt="Logo"
            src="/images/logo.svg"
            width={{ base: "82px", lg: "184px" }}
            height={{ base: "20px", lg: "45px" }}
          />
        </Link>
      </Box>
      <Spacer />
      <Box />
    </Flex>
  );
};

export default Header;
