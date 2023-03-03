import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const SlideContinents: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: "/images/europe/continent-europe.png",
      continent: "Europa",
      description: "O continente mais antigo",
    },
    {
      id: 2,
      image: "/images/europe/continent-europe.png",
      continent: "América do Norte",
      description: "O continente mais antigo",
    },
  ];

  return (
    <Box width="container.lg" mt="12">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-content">
              <Text fontSize="48px" color="gray.100" fontWeight="bold">
                {item.continent}
              </Text>
              <Text fontSize="24px" color="gray.100" fontWeight="bold">
                {item.description}
              </Text>
            </div>
            <Image src={item.image} alt="asdd" width={1240} height={450} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SlideContinents;
