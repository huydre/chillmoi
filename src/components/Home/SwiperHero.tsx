"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { heroItem } from "@/constant";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus,AiOutlineRight,AiOutlineLeft } from "react-icons/ai";

const SwiperHero = () => {
  const [heroData, setHeroData] = useState(heroItem[0]);

  const handleSlideChange = (swiper) => {
    // Truy xuất key của slide hiện tại thông qua thuộc tính activeIndex
    const currentSlideKey = swiper.slides[swiper.activeIndex].getAttribute(
      "data-swiper-slide-index"
    );
    if (currentSlideKey) setHeroData(heroItem[Number(currentSlideKey)]);
  };
  console.log(heroData);

  return (
    <div className="w-[calc(100% - 74px)]">
      <div className="w-full">
        <Swiper
          //   onSwiper={(swiper) => {
          //     swiperRef.current = swiper;
          //   }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          slidesPerView={1}
          speed={700}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          watchSlidesProgress
          modules={[Autoplay, Pagination, Navigation]}
          className="md:h-[600px] h-[550px]  cursor-grab overflow-hidden"
        >
          {heroItem.map((i) => (
            <SwiperSlide data-swiper-slide-index={i.index}>
              <div className="bg-black/30 bg-blend-overlay">
                <Image
                  className="-z-10"
                  src={i.bannerImg}
                  alt=""
                  fill
                  quality={100}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-[200px] z-10 mx-[124px] space-y-8">
            <h1>{heroData.title}</h1>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <button className="bg-primary p-4 rounded-full">
                  <FaPlay size="1em" />
                </button>
                <h6 className="text-md">Xem ngay</h6>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-primary p-4 rounded-full">
                  <AiOutlinePlus />
                </button>
                <h6 className="text-md">Danh sách</h6>
              </div>
            </div>
            <div className="flex space-x-12 pt-12">
              <div>
                <h6>Năm</h6>
                <h6>{heroData.year}</h6>
              </div>
              <div>
                <h6>Loại</h6>
                <h6>{heroData.type}</h6>
              </div>
              <div>
                <h6>Thể loại</h6>
                <h6>{heroData.genres}</h6>
              </div>
            </div>
          </div>
        <div className="absolute top-[200px] right-[150px] z-10 mx-[124px] space-y-8">
            <div className="flex space-x-4 items-center">
                <h4>0{heroData.index}</h4>
                <div className="h-[2px] bg-white w-12"/>
                <h4>0{heroItem.length}</h4>
            </div>
            <div className="w-[300px] h-[85px]">
                {heroData.shortDesc}
            </div>
            <div className="flex items-center space-x-4 pt-8">
                <button><AiOutlineLeft size='2em'/></button>
                <button><AiOutlineRight size='2em'/></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperHero;
