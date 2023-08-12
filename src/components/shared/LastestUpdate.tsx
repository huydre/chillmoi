"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/free-mode";
import { FreeMode} from "swiper/modules";
import { AiOutlinePlus } from "react-icons/ai";
import ArrowRight from "@/lib/icon/ArrowRight";
import SwiperCore from "swiper/core";
import React, { useEffect, useRef, useState } from "react";
import { LastestUpdateInterface } from "@/lib/interface";
import { Genres } from "@/constant";
import PosterCard from "./PosterCard";

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
          speed={500}
          freeMode={true}
          modules={[FreeMode]}
          slidesPerView={"auto"}
          slidesPerGroup={1}
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
          {data.results.map((i: LastestUpdateInterface) => (
            <SwiperSlide>
              <PosterCard data={i} mediatype={mediatype} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LastestUpdate;
