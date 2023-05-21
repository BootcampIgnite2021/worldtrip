import React from "react";
import Header from "@/components/Header";
import CardTravelOptions from "@/components/CardTravelOptions";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import SlideContinents from "@/components/SlideContinents";
import client from "./../services/faunadb";
import faunadb from "faunadb";
import { getData } from "./lib";
import { ContinentsDataResponse } from "@/interfaces/faunadbResponse";

interface Props {
  data: ContinentsDataResponse[];
}

export default function Home({ data }: Props) {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      <Header isVisibleGoBack={false} />
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
            height={isSmallScreen ? 335 : 163}
          />

          <Box
            left={isSmallScreen ? "100" : "2"}
            top={isSmallScreen ? "20" : "6"}
            position="absolute"
          >
            <Text
              fontSize={{ base: "20px", md: "4xl" }}
              color="gray.100"
              maxW={426}
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Text>
            <Text
              fontSize={{ base: "14px", md: "xl" }}
              color="gray.200"
              maxW={524}
            >
              Chegou a hora de tirar do papel a viagem que você <br /> sempre
              sonhou.
            </Text>
          </Box>
          <Image
            visibility={isSmallScreen ? "visible" : "hidden"}
            alt="Banner"
            src="/images/airplane.png"
            position="absolute"
            top="20"
            right="30"
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
