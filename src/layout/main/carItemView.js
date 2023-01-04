import React from "react";
import { Filters } from "./filters";
import { Lists } from "./lists";
function CarItemView() {
  const carlist = [
    {
        title:'Audi',
        id:'232542',
        list:[
            {
                type: 'Audi A4 2011',
                date:'2022-12-30',
                imgurl: 'img/cars/34556255-1.jpeg',
            },
            {
                type: 'Audi A4 2011',
                date:'2022-12-30',
                imgurl: './img/cars/34658453-1.jpeg',
            },
            {
                type: 'Audi A4 2011',
                date:'2022-12-30',
                imgurl: './img/cars/54266212-1.jpeg',
            },
            {
                type: 'Audi A4 2011',
                date:'2022-12-30',
                imgurl: './img/cars/58308712-1.jpeg',
            },
        ]
    },
    {
        title:'Toyota',
        id:'345333',
        list:[
            {
                type: 'Toyota A4 2011',
                date:'2022-12-30',
                imgurl: 'img/cars/64977912-1.jpeg',
            },
            {
                type: 'Toyota A4 2011',
                date:'2022-12-30',
                imgurl: './img/cars/67059162-1.jpeg',
            },
            {
                type: 'Toyota A4 2011',
                date:'2022-12-30',
                imgurl: './img/cars/67126772-1.jpeg',
            },
            {
                type: 'Toyota A4 2011',
                date:'2022-12-30',
                imgurl: './img/cars/67206002-1.jpeg',
            },
        ]
    },
]
  return (
    <div className='w-full flex flex-col mt-5 space-x-5'>
        <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
            <div class="swiper-wrapper" style="transform: translate3d(-7638px, 0px, 0px); transition-duration: 0ms;">
                <div class="swiper-slide swiperSlide" style="margin-right: 2px;">
                    <img src="https://vehiclebid.info/uploads/70586422/70586422-1.jpeg" class="chakra-image css-1phd9a0" data-xblocker="passed" style="visibility: visible;"/>
                </div>
            <div class="swiper-slide swiperSlide" style="margin-right: 2px;">
                <img src="https://vehiclebid.info/uploads/70586422/70586422-2.jpeg" class="chakra-image css-1phd9a0" data-xblocker="passed" style="visibility: visible;"/>
            </div>
            <div class="swiper-slide swiperSlide" style="margin-right: 2px;">
                <img src="https://vehiclebid.info/uploads/70586422/70586422-3.jpeg" class="chakra-image css-1phd9a0" data-xblocker="passed" style="visibility: visible;"/>
            </div>
            <div class="swiper-slide swiperSlide" style="margin-right: 2px;">
                <img src="https://vehiclebid.info/uploads/70586422/70586422-4.jpeg" class="chakra-image css-1phd9a0" data-xblocker="passed" style="visibility: visible;"/>
            </div>
            <div class="swiper-slide swiperSlide" style="margin-right: 2px;">
                <img src="https://vehiclebid.info/uploads/70586422/70586422-5.jpeg" class="chakra-image css-1phd9a0" data-xblocker="passed" style="visibility: visible;"/>
            </div>
            <div class="swiper-slide swiperSlide" style="margin-right: 2px;">
                <img src="https://vehiclebid.info/uploads/70586422/70586422-6.jpeg" class="chakra-image css-1phd9a0" data-xblocker="passed" style="visibility: visible;"/>
            </div>
            <div class="swiper-slide swiperSlide" style="margin-right: 2px;">
                <img src="https://vehiclebid.info/uploads/70586422/70586422-7.jpeg" class="chakra-image css-1phd9a0" data-xblocker="passed" style="visibility: visible;"/>
            </div>
            <div class="swiper-slide swiperSlide" style="margin-right: 2px;">
                <img src="https://vehiclebid.info/uploads/70586422/70586422-8.jpeg" class="chakra-image css-1phd9a0" data-xblocker="passed" style="visibility: visible;"/>
            </div>
            <div class="swiper-slide swiperSlide" style="margin-right: 2px;">
                <img src="https://vehiclebid.info/uploads/70586422/70586422-9.jpeg" class="chakra-image css-1phd9a0" data-xblocker="passed" style="visibility: visible;"/>
            </div>
            <div class="swiper-slide swiperSlide swiper-slide-prev" style="margin-right: 2px;">
                <img src="https://vehiclebid.info/uploads/70586422/70586422-10.jpeg" class="chakra-image css-1phd9a0" data-xblocker="passed" style="visibility: visible;"/>
            </div>
            <div class="swiper-slide swiperSlide swiper-slide-active" style="margin-right: 2px;">
                <img src="https://vehiclebid.info/uploads/70586422/70586422-11.jpeg" class="chakra-image css-1phd9a0" data-xblocker="passed" style="visibility: visible;"/>
            </div>
            <div class="swiper-slide swiperSlide swiper-slide-next" style="margin-right: 2px;">
                <img src="https://vehiclebid.info/uploads/70586422/70586422-12.jpeg" class="chakra-image css-1phd9a0" data-xblocker="passed" style="visibility: visible;"/>
            </div>
        </div>
        <div class="swiper-button-prev">
        </div>
        <div class="swiper-button-next swiper-button-disabled">
        </div>
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet"></span>
            <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
        </div>
    </div>
        {/* <div className="searchstring sticky top-0  drop-shadow">
            <input type="text" placeholder="Only VIN" className="inputstring w-full" />
        </div>
        <p className="pl-4 text-4xl font-bold text-black decoration-8 decoration-dashed decoration-white">
            Check history of cars sold at Copart and IAAI auctions
        </p>
        <p className="pl-4 text-black decoration-8 decoration-dashed decoration-white">
        Our website provides you with information about bidding history and statistics of vehicles sales from Copart and IAAI. The website’s user-friendly interface allows you to quick and efficient search for a vehicle's history by a VIN and LOT number. You can also use a handy filter by make, model, year, and price.
        </p>
      <div className='w-full flex flex-row '>
        <div className='w-1/4 pr-4'>
            <Filters />
        </div>
        <div className="w-3/4 pl-4 flex flex-col">
            <Lists showData={carlist}/>
        </div>
                          
      </div>             */}
    </div>
  );
}
export default CarItemView;
