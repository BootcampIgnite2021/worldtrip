/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { dataContinentsUrl } from "@/interfaces/continents-url";
import CardCities from "@/components/CardCities";
import { getDataCities, getDataContinentsDescriptionCities } from "@/services";
import {
  ContinentsAndCitiesDataResponse,
  ContinentsDataResponse,
} from "@/interfaces/faunadbResponse";

interface ContinentsData {
  dataCities: ContinentsAndCitiesDataResponse[];
  dataContinent: ContinentsDataResponse[];
}

export default function Continents({
  dataCities,
  dataContinent,
}: ContinentsData) {
  const router = useRouter();

  useEffect(() => {
    const verifyUrl = (url: string) => url !== String(router.query?.index);

    const hasUrlDiferent = dataContinentsUrl.every((item) =>
      verifyUrl(item.redirectUrl)
    );

    if (hasUrlDiferent) {
      router.push("/");
      return;
    }
  }, [router]);

  const [continent] = dataContinent;

  return (
    <React.Fragment>
      <Header isVisibleGoBack={true} />

      <Box position="relative">
        <Image
          src={continent.imageUrl}
          alt="Europa"
          width="100%"
          height={{ base: "150px", lg: "250px" }}
          objectFit="cover"
        />

        <Box
          top={{ base: "50", lg: "150" }}
          left={{ base: "150", lg: "20" }}
          position="absolute"
        >
          <Text
            fontSize={{ base: "18px", lg: "48px" }}
            fontWeight="semibold"
            color="white"
          >
            {continent.continent}
          </Text>
        </Box>
      </Box>

      <Flex padding={{ base: "8", lg: "20" }}>
        <Flex
          alignItems="center"
          width="100%"
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="space-between"
        >
          <Box maxW="800px">
            <Text
              textAlign="justify"
              color="gray.800"
              fontSize={{ base: "14px", lg: "24px" }}
              fontWeight="normal"
            >
              {continent.descriptionFull}
            </Text>
          </Box>

          <Box width="100%">
            <Flex
              justifyContent={{ base: "flex-start", lg: "flex-end" }}
              mt={{ base: "16px", lg: "8px" }}
            >
              <Box pr={{ base: "10", lg: "20" }}>
                <Text
                  color="yellow.900"
                  fontSize={{ base: "24px", lg: "48px" }}
                  fontWeight="semibold"
                >
                  {continent.country}
                </Text>
                <Text
                  color="gray.800"
                  fontSize={{ base: "18px", lg: "24px" }}
                  fontWeight={{ base: "regular", lg: "semibold" }}
                >
                  países
                </Text>
              </Box>
              <Box pr={{ base: "10", lg: "20" }}>
                <Text
                  color="yellow.900"
                  fontSize={{ base: "24px", lg: "48px" }}
                  fontWeight="semibold"
                >
                  {continent.language}
                </Text>
                <Text
                  color="gray.800"
                  fontSize={{ base: "18px", lg: "24px" }}
                  fontWeight={{ base: "regular", lg: "semibold" }}
                >
                  línguas
                </Text>
              </Box>
              <Box pr={{ base: "10", lg: "20" }}>
                <Text
                  color="yellow.900"
                  fontSize={{ base: "24px", lg: "48px" }}
                  fontWeight="semibold"
                >
                  {continent.cidades}
                </Text>
                <Flex alignItems="center">
                  <Text
                    width={{ base: "110px", lg: "100%" }}
                    color="gray.800"
                    fontSize={{ base: "18px", lg: "24px" }}
                    fontWeight={{ base: "regular", lg: "semibold" }}
                  >
                    cidades +100
                  </Text>
                  <Tooltip label="Muitas cidades" aria-label="A tooltip">
                    <Image
                      src="/info.svg"
                      alt="Info"
                      width="16px"
                      height="16px"
                      marginLeft="8px"
                    />
                  </Tooltip>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>

      <Flex
        pr={{ base: "8", lg: "20" }}
        pl={{ base: "8", lg: "20" }}
        pb={{ base: "8", lg: "20" }}
        direction="column"
      >
        <Box
          pb={{ base: "5px", lg: "10px" }}
          justifyContent={{ base: "flex-start", lg: "flex-end" }}
        >
          <Text fontSize={{ base: "24px", lg: "36px" }} fontWeight="medium">
            Cidades +100
          </Text>
        </Box>

        <CardCities dataCities={dataCities} />
      </Flex>
    </React.Fragment>
  );
}

export async function getStaticPaths() {
  const continents = [
    "north-america",
    "south-america",
    "asia",
    "europe",
    "oceania",
    "africa",
  ];

  const paths = continents.map((continent) => ({
    params: { index: continent },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const continent = params.index;

  const continentTranslate = dataContinentsUrl.find(
    ({ redirectUrl }) => redirectUrl === continent
  );

  const responseCities = await getDataCities(
    String(continentTranslate?.continent)
  );

  const responseContinent = await getDataContinentsDescriptionCities(
    String(continentTranslate?.continent)
  );

  const dataCities = responseCities?.data?.map((item: any) => {
    const { ref, ...rest } = item.data;
    return rest;
  });

  const dataContinent = responseContinent?.data?.map((item: any) => {
    const { ref, ...rest } = item.data;
    return rest;
  });

  return {
    props: {
      dataCities,
      dataContinent,
    },
  };
}
