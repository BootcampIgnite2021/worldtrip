import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

interface DataOptionsProps {
  name: string;
  srcImage: string;
  srcImageEllipse: string;
}

const dataOptions: DataOptionsProps[] = [
  {
    name: "vida noturna",
    srcImage: "/images/cocktail.svg",
    srcImageEllipse: "/images/ellipse.svg",
  },
  {
    name: "praia",
    srcImage: "/images/surf.svg",
    srcImageEllipse: "/images/ellipse.svg",
  },
  {
    name: "moderno",
    srcImage: "/images/building.svg",
    srcImageEllipse: "/images/ellipse.svg",
  },
  {
    name: "clássico",
    srcImage: "/images/museum.svg",
    srcImageEllipse: "/images/ellipse.svg",
  },
  {
    name: "e mais...",
    srcImage: "/images/earth.svg",
    srcImageEllipse: "/images/ellipse.svg",
  },
];

const CardTravelOptions: React.FC = () => {
  const [showBlock, setShowBlock] = React.useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  React.useEffect(() => {
    setShowBlock(!isMobile);
  }, [isMobile]);

  return (
    <Flex
      width="100%"
      maxW="container.lg"
      justifyContent="center"
      align="center"
      marginTop={{ base: "40px", lg: "80px" }}
    >
      <Wrap spacing={{ base: "40px", lg: "130px" }} justify="center">
        {showBlock
          ? dataOptions.map((item: DataOptionsProps, index: number) => (
              <WrapItem
                key={index}
                visibility={{ base: "hidden", lg: "visible" }}
                justifyContent="center"
                alignItems="center"
              >
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
            ))
          : dataOptions.map((item: DataOptionsProps, index: number) => (
              <WrapItem key={index} justifyContent="center" alignItems="center">
                <Image src={item.srcImageEllipse} alt={item.name} mt="24px" />
                <Text mt="24px" fontSize="2xl" color="gray.800" ml="8px">
                  {item.name}
                </Text>
              </WrapItem>
            ))}
      </Wrap>
    </Flex>
  );
};

export default CardTravelOptions;
