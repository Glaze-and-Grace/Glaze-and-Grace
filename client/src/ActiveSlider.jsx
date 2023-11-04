import React from "react";
import { swiper, swiperslide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import ProductList from "./Cards";

import { FreeMode, Pagination } from "swiper/modules";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen  ">
      <swiper
        breakpoints={{
          340: {
            sliderPerview: 2,
            spaceBetween: 15,
          },
          700: {
            sliderPerview: 3,
            spaceBetween: 15,
          },
        }}
        FreeMode={true}
        Pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        <ProductList />
      </swiper>
    </div>
  );
};

export default ActiveSlider;
