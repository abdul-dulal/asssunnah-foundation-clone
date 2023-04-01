import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/autoplay";
import slider1 from "../../assets/img/slide1.jpg";
import slider2 from "../../assets/img/slide2.jpg";
import slider3 from "../../assets/img/slide3.jpg";
import slider4 from "../../assets/img/slide4.jpg";

export default function Slider() {
  return (
    <div className="container pt-8">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} className="rounded-lg" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} className="rounded-lg " alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} className="rounded-lg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} className="rounded-lg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
