"use client";
import React from "react";
import Image from "next/image";
import { DetailMovieInterface } from "@/lib/interface";
import { CircularProgress, Divider } from "@nextui-org/react";
import { BsFillPlayFill, BsSend } from "react-icons/bs";
import LastestUpdate from "@/components/shared/LastestUpdate";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Recommendation from "@/components/shared/Recommendation";

interface DetailMovieProps {
  data: DetailMovieInterface;
  recommendation: any;
  cast: any;
  similar: any;
}

const DetailMovie: React.FC<DetailMovieProps> = ({
  data,
  recommendation,
  cast,
  similar,
}) => {
  console.log(recommendation);

  return (
    <div className="min-h-screen w-full">
      <div className="relative md:h-[350px] h-[300px] bg-black/40 bg-blend-overlay rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent z-10 to-black/80 top-1/3"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent z-10 to-black/40 bottom-1/3"></div>
        <Image
          fill
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={""}
          style={{
            objectFit: "cover",
          }}
          className="z-0"
        />

        <div className="absolute bottom-8 w-full flex justify-center z-20">
          <button className="text-xs font-semibold outline outline-[2px] outline-white/30 px-9 py-3 rounded-full flex items-center space-x-3">
            <BsFillPlayFill size="1.5em" />
            <p>TRAILER</p>
          </button>
        </div>

        <div className="absolute bottom-8 px-[100px] flex items-center space-x-3 z-20">
          <CircularProgress
            color="primary"
            size="lg"
            showValueLabel={true}
            value={Number(data.vote_average.toFixed(1)) * 10}
          />
          <div>
            <h4 className="text-sm font-semibold">{data.vote_count} VOTES</h4>
            <p className="text-xs text-gray-500 font-medium">
              Our Users Are Recommending It
            </p>
          </div>
        </div>
      </div>

      <div className="w-full pt-[40px] px-[100px]">
        {/* Info section  */}
        <div>
          <div className=" ">
            <div className="flex space-x-8">
              <div className="relative w-[186px] h-[279px]">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  fill
                  alt=""
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="mx-[124px] pt-4 space-y-6 max-w-[600px]">
                <h2 className="line-clamp-2 leading-tight text-4xl">
                  {data.title}
                </h2>
                <div className="flex items-center space-x-4">
                  <span className="bg-white text-black text-center py-[2px] text-sm font-semibold w-10 rounded-md">
                    {data.release_date.slice(0, 4)}
                  </span>
                  <span className="font-bold"> • </span>
                  <span>
                    {data.genres
                      .map((genre: { name: string }) => genre.name)
                      .join(",")}
                  </span>
                </div>

                <div>
                  <p className="line-clamp-2 max-w-[500px]">{data.overview}</p>
                </div>

                <div className="flex space-x-8">
                  <button className="ring-2 ring-primary bg-primary text-sm font-semibold px-4 py-2 rounded-full  transition duration-200 ease-in-out flex space-x-2 items-center">
                    <BsFillPlayFill />
                    <p>Xem ngay</p>
                  </button>
                  <button className="ring-2 ring-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-200 ease-in-out">
                    + Danh sách
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar  */}
        <Recommendation
          data={similar.results}
          title="Nôi dung tương tự"
          mediatype={"movie"}
        />
        {/* Recommendation  */}
        {recommendation.results.length === 0 ? (
          <></>
        ) : (
          <Recommendation
            data={recommendation.results}
            title="Có thể bạn cũng thích"
            mediatype={"movie"}
          />
        )}
      </div>
    </div>
  );
};

export default DetailMovie;
