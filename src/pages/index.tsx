import React from "react";
import Header from "@/components/Header";
import CardTravelOptions from "@/components/CardTravelOptions";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import SlideContinents from "@/components/SlideContinents";
import client from "./../services/faunadb";
import faunadb from "faunadb";
import { getData } from "./lib";
import { ContinentsDataResponse } from "@/interfaces/faunadbResponse";
const q = faunadb.query;

interface Props {
  data: ContinentsDataResponse[];
}

export default function Home({ data }: Props) {
  return (
    <React.Fragment>
      <Header />
      <Flex
        width="100%"
        flexDir="column"
        justify="center"
        align="center"
        marginBottom="10"
      >
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

        <CardTravelOptions />

        <Divider
          marginTop="80px"
          color="gray.800"
          width="90px"
          borderBottomWidth="2px"
          orientation="horizontal"
        />

        <Text mt="52px" textAlign="center" color="gray.800" fontSize="24px">
          Vamos nessa? <br /> Então escolha seu continente
        </Text>

        <SlideContinents data={data} />
      </Flex>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const response = await getData();

  const data = response?.data?.map((item: any) => {
    const { ref, ...rest } = item.data;
    return rest;
  });

  return {
    props: {
      data,
    },
  };
}
