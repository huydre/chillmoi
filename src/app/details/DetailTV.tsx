"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { DetailMovieInterface } from "@/lib/interface";
import { Badge, CircularProgress } from "@nextui-org/react";
import { BsFillPlayFill, BsSend, BsPlay } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import Recommendation from "@/components/shared/Recommendation";
import Comment from "@/components/shared/Comment";
import Link from "next/link";
import { Select, Option, select } from "@material-tailwind/react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/shared/Loading";
import { useRouter } from "next/navigation";
import SeasonAndEpisode from "@/components/shared/SeasonAndEpisode";

interface DetailTVProps {
  data: DetailMovieInterface;
  recommendation: any;
  cast: any;
  reviews: any;
  similar: any;
  seasonDetail: any;
}

const DetailTV: React.FC<DetailTVProps> = ({
  data,
  recommendation,
  cast,
  reviews,
  similar,
  seasonDetail,
}) => {

  const director = cast.crew.filter((e: any) => e.job === "Director");

  console.log(data)

  return (
    <div className="min-h-screen w-full dark">
      <div className="relative md:h-[350px] h-[300px] bg-black/40 bg-blend-overlay rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent z-10 to-black/80 top-1/3"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent z-10 to-black/40 bottom-1/3"></div>
        <Image
          fill
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={""}
          style={{
            objectFit: "cover",
          }}
          className="z-0"
        />

        <div className="absolute bottom-8 w-full lg:flex justify-center z-20 hidden">
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

      <div className="w-full pt-[40px] lg:px-[100px] px-4">
        {/* Info section  */}
        <div>
          <div className="lg:flex lg:space-x-10">
            <div className="flex lg:space-x-8 w-full">
              <div className="relative w-[186px] h-[279px] lg:block hidden">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  fill
                  alt=""
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="lg:mx-[124px] pt-4 space-y-6 max-w-[600px]">
                <h2 className="line-clamp-2 leading-tight text-4xl">
                  {data.name}
                </h2>
                <div className="flex items-center space-x-4">
                  <span className="bg-white text-black text-center py-[2px] px-[2px] text-sm font-semibold w-10 rounded-md">
                    {data.first_air_date.slice(0, 4)}
                  </span>
                  <span className="font-bold"> • </span>
                  <span className="line-clamp-1">
                    {data.genres
                      .map((genre: { name: string }) => genre.name)
                      .join(",")}
                  </span>
                </div>

                <div>
                  <p className="line-clamp-2 max-w-[500px]">{data.overview}</p>
                </div>

                <div className="flex space-x-8">
                  <a
                    href={`/watch/tv/${data.id}/${data.name}?season=0&episode=1`}
                    className="ring-2 ring-primary bg-primary text-sm font-semibold px-4 py-2 rounded-full  transition duration-200 ease-in-out flex space-x-2 items-center"
                  >
                    <BsFillPlayFill />
                    <p>Xem ngay</p>
                  </a>
                  <button className="ring-2 ring-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-200 ease-in-out">
                    + Danh sách
                  </button>
                </div>
              </div>
            </div>

            {/* cast , direcor, genres  */}
            <div className="space-y-6 lg:w-1/3 pt-8 lg:pt-4">
              {/* Comment button, share button  */}
              <div className="flex space-x-8 mb-4">
                {/* Comment  */}
                <div>
                  <button>
                    <Badge content={reviews.total_results}>
                      <BiCommentDetail size="2em" />
                    </Badge>
                  </button>
                  <p className="text-xs">Bình luận</p>
                </div>
                {/* Share  */}
                <div>
                  <button>
                    <BsSend size="2em" />
                  </button>
                  <p className="text-xs">Chia sẻ</p>
                </div>
              </div>
              {/* cast  */}
              <div className="line-clamp-2 text-sm">
                <label className="inline text-gray-500">Diễn viên: </label>
                <p className="inline">
                  {cast.cast.map((i: any) => i.name).join(", ")}
                </p>
              </div>

              {/* director  */}
              <div className="line-clamp-2 text-sm">
                <label className="inline text-gray-500">Đạo diễn:</label>
                <p className="inline">
                  {director.map((i: any) => i.name).join(", ")}
                </p>
              </div>

              {/* genres  */}
              <div className="line-clamp-2 text-sm">
                <label className="inline text-gray-500">Thể loại:</label>
                <p className="inline">
                  {data.genres
                    .map((genre: { name: string }) => genre.name)
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tập và mùa  */}
        <SeasonAndEpisode data={data} seasonDetail={seasonDetail} />

        <div className="pt-10">
          {/* Similar  */}
          <Recommendation
            data={similar.results}
            title="Nôi dung tương tự"
            mediatype={"tv"}
          />
        </div>

        <div className="pt-10">
          {/* Recommendation  */}
          {recommendation.results.length === 0 ? (
            <></>
          ) : (
            <Recommendation
              data={recommendation.results}
              title="Có thể bạn cũng thích"
              mediatype={"tv"}
            />
          )}
        </div>

        {/* Review  */}
        <div>
          <h3 className="py-4 pt-10">Bình luận</h3>
          <div className="space-y-8">
            {!reviews.total_results ? (
              <p className="pb-3 text-sm italic">Chưa có bình luận</p>
            ) : (
              reviews.results.map((i: any) => <Comment data={i} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTV;
