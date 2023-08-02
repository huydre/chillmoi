"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { heroItem } from "@/constant";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import SwiperCore from 'swiper/core'


const SwiperHero = () => {
  const [heroData, setHeroData] = useState(heroItem[0]);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    // Truy xuất key của slide hiện tại thông qua thuộc tính activeIndex
    const currentSlideKey = swiper.slides[swiper.activeIndex].getAttribute(
      "data-swiper-slide-index"
    );
    if (currentSlideKey) setHeroData(heroItem[Number(currentSlideKey)]);
  };
  
  //Hàm trả về key của slide tiếp theo
  const nextSlideKey = () => {
    if (Number(heroData.index) === heroItem.length) return 0;
    return Number(heroData.index);
  }

  return (
    <div className="w-[calc(100% - 74px)]">
      <div className="w-full">
        <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
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
              <div className="h-full bg-black/40 bg-blend-overlay ">
                <Image
                  className="hidden xl:block"
                  fill
                  src="/bg_overlay.svg"
                  alt=""
                  quality={100}
                  style={{
                    objectFit: "cover",
                  }}
                />
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
        <div className="absolute top-[200px] z-10 mx-[124px] lg:grid grid-cols-4 2xl:w-[70%] w-[80%] hidden">
          <div className="space-y-8 col-span-3">
            <h1>{heroData.title}</h1>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <button className="bg-primary p-3 rounded-full">
                  <FaPlay size="1em" />
                </button>
                <h6 className="text-md">Xem ngay</h6>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-primary p-3 rounded-full">
                  <AiOutlinePlus />
                </button>
                <h6 className="text-md">Danh sách</h6>
              </div>
            </div>
            <div className="xl:flex space-x-12 pt-12 hidden">
              <div>
                <h5 className="text-[1rem]">Năm</h5>
                <h6>{heroData.year}</h6>
              </div>
              <div>
                <h5 className="text-[1rem]">Loại</h5>
                <h6>{heroData.type}</h6>
              </div>
              <div>
                <h5 className="text-[1rem]">Thể loại</h5>
                <h6>{heroData.genres}</h6>
              </div>
            </div>
          </div>

          <div className="space-y-8 xl:flex flex-col hidden">
            <div className="flex space-x-4 items-center">
              <h4>0{heroData.index}</h4>
              <div className="h-[2px] bg-white w-12" />
              <h4>0{heroItem.length}</h4>
            </div>
            <div className="w-[300px] h-[85px]">{heroData.shortDesc}</div>
            <div className="flex items-center space-x-4 pt-8">
              <button onClick={() => {
                    swiperRef.current?.slidePrev();
                  }}>
                <AiOutlineLeft size="2em" />
              </button>
              <button onClick={() => {
                    swiperRef.current?.slideNext();
                  }}>
                <AiOutlineRight size="2em" />
              </button>
            </div>
          </div>
        </div>

        <aside className="absolute bg-[#0E0E10] lg:w-[420px] flex right-0 -translate-y-[170px] z-20 2xl:right-[154px] items-center rounded-tl-xl w-full md:pl-[74px] lg:pl-0">
          <div className="px-[40px] w-full space-y-2">
            <h5 className="text-sm uppercase text-gray-400">Tiếp theo</h5>
            <h3 className="text-xl font-medium">
                  {heroItem[nextSlideKey()].title}
            </h3>
          </div>
          <picture className="relative min-h-[170px] min-w-[150px] bg-gradient-to-b from-transparent to-black/80 bg-blend-overlay">
            <Image
              fill
              src={heroItem[nextSlideKey()].bannerImg}
              alt=""
              quality={100}
              style={{
                objectFit: "cover",
              }}
              className="-z-10"
            />
          </picture>
        </aside>
      </div>
    </div>
  );
};

export default SwiperHero;
