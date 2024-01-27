import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

import Galeri1 from "@/public/aset-1.jpeg";
import Galeri2 from "@/public/aset-2.jpeg";
import Galeri3 from "@/public/aset-3.jpeg";
import Galeri4 from "@/public/aset-4.jpeg";
import Galeri5 from "@/public/aset-5.jpeg";
import Galeri6 from "@/public/aset-6.jpeg";
import Galeri7 from "@/public/aset-7.jpeg";
import Galeri8 from "@/public/aset-8.jpeg";

const slideContent = [
  <Image
    key="1"
    src={Galeri1}
    alt="Galeri 1"
    className="items-center w-[35rem] h-[10.938rem] rounded-md object-cover"
  />,
  <Image
    key="2"
    src={Galeri2}
    alt="Galeri 2"
    className="items-center w-[35rem] h-[10.938rem] rounded-md object-cover"
  />,
  <Image
    key="3"
    src={Galeri3}
    alt="Galeri 3"
    className="items-center w-[35rem] h-[10.938rem] rounded-md object-cover"
  />,
  <Image
    key="4"
    src={Galeri4}
    alt="Galeri 4"
    className="items-center w-[35rem] h-[10.938rem] rounded-md object-cover"
  />,
  <Image
    key="5"
    src={Galeri5}
    alt="Galeri 5"
    className="items-center w-[35rem] h-[10.938rem] rounded-md object-cover"
  />,
  <Image
    key="6"
    src={Galeri6}
    alt="Galeri 6"
    className="items-center w-[35rem] h-[10.938rem] rounded-md object-cover"
  />,
  <Image
    key="7"
    src={Galeri7}
    alt="Galeri 7"
    className="items-center w-[35rem] h-[10.938rem] rounded-md object-cover"
  />,
  <Image
    key="8"
    src={Galeri8}
    alt="Galeri 8"
    className="items-center w-[35rem] h-[10.938rem] rounded-md object-cover"
  />,
];

function Galeri() {
  return (
    <div className=" py-5 items-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 1500 }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {slideContent.map((content, index) => (
          <SwiperSlide key={index} className="d-flex">
            {content}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Galeri;
