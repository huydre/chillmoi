import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export interface RecommendationProps {
  data: any;
  title: string;
  mediatype: string;
}

export default function Recommendation({
  data,
  title,
  mediatype,
}: RecommendationProps) {
  return (
    <div>
      {/* title  */}
      <h3 className="py-4">{title}</h3>

      <Swiper
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
        {data.map((recom: any) => (
          <SwiperSlide>
            <Link href={`/details/${mediatype}/${recom.id}/${recom.title}`}>
              <div className="relative max-w-[186px] h-[279px] cursor-pointer rounded-2xl overflow-hidden">
                <Image
                  fill
                  src={`https://image.tmdb.org/t/p/w500${recom.poster_path}`}
                  alt={recom.title || recom.name}
                  style={{
                    objectFit: "cover",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 top-1/3"></div>

                <div className="w-full absolute bottom-0 p-2 space-y-1">
                  <p className="text-base line-clamp-1 font-semibold text-gray-300">
                    {recom.title || recom.name}
                  </p>
                  <div className="flex space-x-2 text-[0.8rem] font-medium">
                    <p className="text-primary capitalize font-semibold">
                      {recom.media_type || mediatype}
                    </p>
                    <span>-</span>
                    <p className="text-gray-500 truncate"></p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
