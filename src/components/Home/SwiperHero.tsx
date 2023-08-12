"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import SwiperCore from "swiper/core";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Arrow from "@/lib/icon/Arrow";
import { Genres } from "@/constant";

export interface SwiperHeroProps {
  data: any;
}

const SwiperHero = ({ data }: SwiperHeroProps) => {
  const [heroData, setHeroData] = useState(data[0]);
  const [indexSlide, setIndexSlide] = useState(1);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    // Truy xuất key của slide hiện tại thông qua thuộc tính activeIndex
    const currentSlideKey = swiper.slides[swiper.activeIndex].getAttribute(
      "data-swiper-slide-index"
    );
    if (currentSlideKey) setHeroData(data[Number(currentSlideKey)]);
    setIndexSlide(Number(currentSlideKey) + 1);
  };

  //Hàm trả về key của slide tiếp theo
  const nextSlideKey = () => {
    if (indexSlide === data.length) return 0;
    return Number(indexSlide);
  };

  return (
    <div className="w-[calc(100% - 74px)]">
      <div className="w-full">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          slidesPerView={1}
          speed={800}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          watchSlidesProgress
          modules={[Autoplay, Pagination, Navigation]}
          className="md:h-[650px] h-[600px]  cursor-grab overflow-hidden"
        >
          {data.map(
            (i: {
              [x: string]: any;
              index: any;
              bannerImg: string | StaticImport;
            }) => (
              <SwiperSlide data-swiper-slide-index={i.index}>
                <div className="h-full bg-black/40 bg-blend-overlay ">
                  <Image
                    className="hidden xl:block"
                    fill
                    src={"/bg_overlay.svg"}
                    alt=""
                    quality={100}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <Image
                    className="-z-10"
                    src={`https://image.tmdb.org/t/p/original${i.backdrop_path}`}
                    alt=""
                    fill
                    quality={100}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>

        {/* Mobile display  */}
        <div className="absolute z-10 mx-4 top-8 pointer-events-none lg:hidden">
          <div className="flex items-center space-x-4 pt-8 mb-20 pointer-events-auto">
            <button
              onClick={() => {
                swiperRef.current?.slidePrev();
              }}
            >
              <AiOutlineLeft size="2em" />
            </button>
            <button
              onClick={() => {
                swiperRef.current?.slideNext();
              }}
            >
              <AiOutlineRight size="2em" />
            </button>
          </div>

          <div className="flex space-x-4 items-center">
            <h4 className="font-semibold">0{indexSlide}</h4>
            <div className="h-[2px] bg-white w-12" />
            <h4 className="font-semibold">0{data.length}</h4>
          </div>

          <h1 className="line-clamp-2 leading-tight text-4xl my-6">
            {heroData.title || heroData.name}
          </h1>

          <a
            className="text-primary pointer-events-auto"
            href={`details/${heroData.media_type}/${heroData.id}/${
              heroData.title || heroData.name
            }`}
          >
            <Arrow />
          </a>
        </div>

        <div className="absolute top-[200px] z-10 mx-[124px] lg:grid grid-cols-4 2xl:w-[70%] w-[80%] hidden">
          <div className="space-y-8 col-span-3">
            <h1 className="line-clamp-2 leading-tight">
              {heroData.title || heroData.name}
            </h1>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <a
                  href={`details/${heroData.media_type}/${heroData.id}/${
                    heroData.title || heroData.name
                  }`}
                  className="bg-primary p-3 rounded-full text-black"
                >
                  <FaPlay size="1em" />
                </a>
                <h6 className="text-md">Xem ngay</h6>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-white p-3 rounded-full text-black">
                  <AiOutlinePlus />
                </button>
                <h6 className="text-md">Danh sách</h6>
              </div>
            </div>
            <div className="xl:flex space-x-12 pt-6 hidden">
              <div>
                <h5 className="text-[0.9rem]">Năm</h5>
                <h6 className="text-[1rem]">
                  {heroData.release_date?.slice(0, 4) ||
                    heroData.first_air_date?.slice(0, 4)}
                </h6>
              </div>
              <div>
                <h5 className="text-[0.9rem]">Loại</h5>
                <h6 className="text-[1rem]">
                  {heroData.media_type === "movie" ? "Phim lẻ" : "Phim bộ"}
                </h6>
              </div>
              <div>
                <h5 className="text-[0.9rem]">Thể loại</h5>
                <h6 className="text-[1rem] line-clamp-1">
                  {heroData.genre_ids
                    ?.map(
                      (id: number) =>
                        Genres.find((item) => item.id === id)?.name
                    )
                    .join(", ")}
                </h6>
              </div>
            </div>
          </div>

          <div className="space-y-8 xl:flex flex-col hidden">
            <div className="flex space-x-4 items-center">
              <h4>0{indexSlide}</h4>
              <div className="h-[2px] bg-white w-12" />
              <h4>0{data.length}</h4>
            </div>
            <div className="w-[300px] line-clamp-3">{heroData.overview}</div>
            <div className="flex items-center space-x-4 pt-8">
              <button
                onClick={() => {
                  swiperRef.current?.slidePrev();
                }}
              >
                <AiOutlineLeft size="2em" />
              </button>
              <button
                onClick={() => {
                  swiperRef.current?.slideNext();
                }}
              >
                <AiOutlineRight size="2em" />
              </button>
            </div>
          </div>
        </div>
        <aside className="absolute bg-[#0E0E10] lg:w-[420px] flex right-0 -translate-y-[169px] z-20 2xl:right-[154px] items-center lg:rounded-tl-xl w-full md:pl-[74px] lg:pl-0">
          <div className="px-[40px] w-full space-y-2">
            <h5 className="text-sm uppercase text-gray-400">Tiếp theo</h5>
            <h3 className="text-xl font-medium line-clamp-2">
              {data[nextSlideKey()]?.title || data[nextSlideKey()]?.name}
            </h3>
          </div>
          <picture className="relative min-h-[170px] min-w-[150px] bg-gradient-to-b from-transparent to-black/80 bg-blend-overlay">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/w500${
                data[nextSlideKey()]?.backdrop_path
              }`}
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
