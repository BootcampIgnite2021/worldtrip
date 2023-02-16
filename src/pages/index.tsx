import React from "react";
import Header from "@/components/Header";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />

      <Box position="relative">
        <Image
          alt="Banner"
          src="/images/background.png"
          width={2000}
          height={335}
        />

        <Box left="140" top="20" position="absolute">
          <Text fontSize="4xl" color="gray.100" maxW={426}>
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text fontSize="xl" color="gray.200" maxW={524}>
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>
        </Box>
        <Image
          alt="Banner"
          src="/images/airplane.png"
          position="absolute"
          top="20"
          right="100"
          zIndex="1"
        />
      </Box>
    </>
  );
}
