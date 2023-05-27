import React from "react";
import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Box,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Flag from "react-world-flags";

const CardCities = () => {
  return (
    <Wrap
      spacing="10"
      align="center"
      justify={{ base: "center", lg: "flex-start" }}
    >
      {[1, 2, 3, 4, 5].map((item, index) => (
        <WrapItem key={index}>
          <Card maxW="xs" borderWidth="1px" borderColor="yellow.900">
            <Image
              objectFit="cover"
              width="100%"
              height="173px"
              src="https://worldtrip-ignite.netlify.app/images/europe/paris.png"
              alt="Caffe Latte"
            />

            <CardBody>
              <Flex align="center" justify="space-between">
                <Box>
                  <Text fontSize="20px" fontWeight="semibold">
                    Londres
                  </Text>
                  <Text
                    color="gray.700"
                    mt="6px"
                    fontSize="16px"
                    fontWeight="me"
                  >
                    Reino Unido
                  </Text>
                </Box>
                <Flag className="image-country" code="br" />
              </Flex>
            </CardBody>
          </Card>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default CardCities;
