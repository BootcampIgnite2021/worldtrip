import React from "react";
import { Box, Flex, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";

interface DataOptionsProps {
  name: string;
  srcImage: string;
}

const dataOptions: DataOptionsProps[] = [
  {
    name: "vida noturna",
    srcImage: "/images/cocktail.svg",
  },
  {
    name: "praia",
    srcImage: "/images/surf.svg",
  },
  {
    name: "moderno",
    srcImage: "/images/building.svg",
  },
  {
    name: "clássico",
    srcImage: "/images/museum.svg",
  },
  {
    name: "e mais...",
    srcImage: "/images/earth.svg",
  },
];

const CardTravelOptions: React.FC = () => {
  return (
    <Flex
      width="100%"
      maxW="container.lg"
      justifyContent="center"
      align="center"
      marginTop="80px"
    >
      {dataOptions.map((item: DataOptionsProps, index: number) => (
        <Wrap width="100%" key={index}>
          <WrapItem>
            <Box
              display="flex"
              flexDir="column"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Image src={item.srcImage} alt={item.name} />
              <Text mt="24px" fontSize="2xl" color="gray.800">
                {item.name}
              </Text>
            </Box>
          </WrapItem>
        </Wrap>
      ))}
    </Flex>
  );
};

export default CardTravelOptions;
