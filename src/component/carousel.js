import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function DemoCarousel(props) {
  let listurl = props.carDataimagelist;
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {listurl && listurl.map ((data, index)=>
          <SwiperSlide className="float-left" key = {index}>
            {
              
             <img src={data}/> 
            }
          </SwiperSlide>
        )}
        
      </Swiper>
    </>
  );
}
