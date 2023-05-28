import React from "react";
import { ContinentsAndCitiesDataResponse } from "@/interfaces/faunadbResponse";
import {
  Image,
  Card,
  CardBody,
  Text,
  Flex,
  Box,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Flag from "react-world-flags";

interface CardCities {
  dataCities: ContinentsAndCitiesDataResponse[];
}

const CardCities = ({ dataCities }: CardCities) => {
  return (
    <Wrap
      spacing="10"
      align="center"
      justify={{ base: "center", lg: "flex-start" }}
    >
      {dataCities.map((item, index) => (
        <WrapItem key={index}>
          <Card w="xs" borderWidth="1px" borderColor="yellow.900">
            <Image
              objectFit="cover"
              width="100%"
              height="173px"
              src={item.imageUrl}
              alt="Caffe Latte"
            />

            <CardBody>
              <Flex align="center" justify="space-between">
                <Box>
                  <Text fontSize="20px" fontWeight="semibold">
                    {item.name}
                  </Text>
                  <Text
                    color="gray.700"
                    mt="6px"
                    fontSize="16px"
                    fontWeight="me"
                  >
                    {item.country}
                  </Text>
                </Box>
                <Flag className="image-country" code={item.code} />
              </Flex>
            </CardBody>
          </Card>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default CardCities;
