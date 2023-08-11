"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import ArrowRight from "@/lib/icon/ArrowRight";
import SwiperCore from "swiper/core";
import React, { useEffect, useRef, useState } from "react";
import { LastestUpdateInterface } from "@/lib/interface";

const LastestUpdate = ({
  data,
  title,
  mediatype,
}: {
  data: LastestUpdateInterface;
  title: string;
  mediatype?: string;
}) => {
  const swiperRef = useRef<SwiperCore | null>(null);

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
          speed={400}
          slidesPerView={"auto"}
          breakpoints={{
            1536: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
          }}
        >
          {data.results.slice(0,10).map((i: LastestUpdateInterface) => (
            <SwiperSlide>
              <div className="relative max-w-[230px] h-[345px] cursor-pointer rounded-2xl overflow-hidden">
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

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 top-1/3"></div>

                  <div className="w-full absolute bottom-0 p-2 space-y-1">
                    <p className="text-base line-clamp-1 font-semibold text-gray-300">
                      {i.title || i.name}
                    </p>
                    <div className="flex space-x-2 text-[0.8rem] font-medium">
                      <p className="text-primary capitalize font-semibold">
                        {(i.media_type || mediatype) === "movie" ? "Phim lẻ" : "Phim bộ"}
                      </p>
                      <span>-</span>
                      <p className="text-gray-500 truncate"></p>
                    </div>
                  </div>

                  <div className="absolute top-2 right-2 bg-white/20 p-2 text-black rounded-full backdrop-blur-sm hover:bg-white/60 transition ease-in-out duration-300">
                    <AiOutlinePlus />
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

export default LastestUpdate;
