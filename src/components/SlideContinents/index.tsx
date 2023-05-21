/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { ContinentsDataResponse } from "@/interfaces/faunadbResponse";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/router";

interface Props {
  data: ContinentsDataResponse[];
}

const SlideContinents: React.FC<Props> = ({ data }) => {
  const dataContinent = [
    {
      continent: "América do Norte",
      redirectUrl: "north-america",
    },
    {
      continent: "América do Sul",
      redirectUrl: "south-america",
    },
    {
      continent: "Ásia",
      redirectUrl: "asia",
    },
    {
      continent: "Europa",
      redirectUrl: "europe",
    },
    {
      continent: "Oceania",
      redirectUrl: "oceania",
    },
    {
      continent: "África",
      redirectUrl: "africa",
    },
  ];

  const router = useRouter();

  const handleRedirectPage = (continent: string) => {
    const urlRedirect = dataContinent.find(
      (item) => item.continent === continent
    );

    router.push(`/continent/${urlRedirect?.redirectUrl}`);
  };

  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box width={isSmallScreen ? "800px" : "100%"} mt="12">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {data.map((item: ContinentsDataResponse, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              handleRedirectPage(item.continent);
            }}
          >
            <div className="swiper-slide-content">
              <Text
                fontSize={{ base: "24px", md: "48px" }}
                color="gray.100"
                fontWeight="bold"
              >
                {item.continent}
              </Text>
              <Text
                fontSize={{ base: "14px", md: "24px" }}
                color="gray.100"
                fontWeight="bold"
              >
                {item.description}
              </Text>
            </div>
            <div className="content-image">
              <img src={item.imageUrl} alt={item.description} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SlideContinents;
