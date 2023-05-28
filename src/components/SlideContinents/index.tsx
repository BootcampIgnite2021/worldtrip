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
import { dataContinentsUrl } from "@/interfaces/continents-url";

interface Props {
  data: ContinentsDataResponse[];
}

const SlideContinents: React.FC<Props> = ({ data }) => {
  const router = useRouter();

  const handleRedirectPage = (continent: string) => {
    const urlRedirect = dataContinentsUrl.find(
      (item) => item.continent === continent
    );

    router.push(`/continent/${urlRedirect?.redirectUrl}`);
  };

  return (
    <Box width={{ base: "100%", lg: "900px" }} mt="12">
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
