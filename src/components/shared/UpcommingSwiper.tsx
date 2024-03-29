"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { AiOutlinePlus } from "react-icons/ai";
import ArrowRight from "@/lib/icon/ArrowRight";
import SwiperCore from "swiper/core";
import React, { useEffect, useRef, useState } from "react";
import { LastestUpdateInterface } from "@/lib/interface";
import { BsPlay } from "react-icons/bs";

const UpcommingSwiper = ({
  data,
  title,
  mediatype,
}: {
  data: LastestUpdateInterface;
  title: string;
  mediatype?: string;
}) => {
  const swiperRef = useRef<SwiperCore | null>(null);
    console.log(data)
  return (
    <div className="py-4 px-2">
      <div className="flex justify-between">
        <h3 className="py-4 leading-tight line-clamp-2">{title}</h3>
        <div className="flex items-center space-x-4 text-white mr-6">
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
            className="rotate-180 hover:scale-[1.15] transition duration-300 ease-in-out"
          >
            <ArrowRight size="2rem" />
          </button>
          <button
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
            className="hover:scale-[1.15] transition duration-300 ease-in-out"
          >
            <ArrowRight size="2rem" />
          </button>
        </div>
      </div>
      <div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          speed={500}
          freeMode={true}
          modules={[FreeMode]}
          slidesPerView={"auto"}
          breakpoints={{
            1536: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {data.results.map((i: LastestUpdateInterface) => (
            <SwiperSlide>
              <div className="relative max-w-[345px] h-[200px] cursor-pointer rounded-2xl overflow-hidden">
                <a
                  href={
                    mediatype
                      ? `details/${mediatype}/${i.id}/${i.title}`
                      : `details/${i.media_type}/${i.id}/${i.title}`
                  }
                >
                  <Image
                    fill
                    src={`https://image.tmdb.org/t/p/w500${i.poster_path}`}
                    alt={i.title || i.name}
                    style={{
                      objectFit: "cover",
                    }}
                  />

                  <div className="absolute left-0 w-14 blur-xs h-full text-center pt-2 bg-black/30">
                    <p className="text-primary font-bold text-xs">THG {i.release_date?.toString()?.slice(5,7)}</p>
                    <p className="text-3xl font-bold">{i.release_date?.toString()?.slice(8,10)}</p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 top-1/3"></div>


                  <div className="w-full absolute bottom-0 p-2 space-y-1 pl-16">
                    <p className="text-base line-clamp-1 font-semibold text-gray-300">
                      {i.title || i.name}
                    </p>
                    <div className="flex space-x-2 text-[0.8rem] font-medium">
                      <p className="text-primary capitalize font-semibold">
                        {(i.media_type || mediatype) === "movie"
                          ? "Phim lẻ"
                          : "Phim bộ"}
                      </p>
                      <span>-</span>
                      <p className="text-gray-500 truncate"></p>
                    </div>
                  </div>

                  <div className="absolute top-2 right-2 bg-white/20 p-2 text-black rounded-full backdrop-blur-sm hover:bg-white/60 transition ease-in-out duration-300">
                    <AiOutlinePlus />
                  </div>

                  <div className="absolute grid grid-cols-1 place-content-center w-full h-full justify-items-center">
                    <div className="bg-gray-900/50 rounded-full text-center p-2 opacity-70">
                      <BsPlay size="2em" />
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UpcommingSwiper;
