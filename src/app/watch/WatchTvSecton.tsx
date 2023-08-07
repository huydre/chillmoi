"use client";
import Recommendation from "@/components/shared/Recommendation";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { BsPlay } from "react-icons/bs";
import Link from "next/link";
import { Select, Option } from "@material-tailwind/react";
import Image from "next/image";
import Loading from "@/components/shared/Loading";

export interface WatchSectionProps {
  id: string;
  data: any;
  recommend: any;
  episodeDetails: any;
  seasonsDetails: any;
}

const WatchTvSection = ({
  id,
  data,
  recommend,
  episodeDetails,
  seasonsDetails,
}: WatchSectionProps) => {
  const searchParams = useSearchParams();

  const [seasons, setSeasons] = useState(Number(searchParams.get("season")) || 0);
  const season = Number(searchParams.get("season")) + 1;

  console.log(episodeDetails);
  return (
    <div className="min-h-screen pt-[70px]">
      <iframe
        src={`https://autoembed.to/tv/tmdb/${id}-${season}-${searchParams.get(
          "episode"
        )}?server=3`}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        className="w-full aspect-video sm: pr-4 pl-4"
      />
      <div className="space-y-4 pt-8 xl:px-32 px-4">
        <h3>{data.name}</h3>
        <h5>
          Mùa {season} - {episodeDetails.name}
        </h5>
        <p className="text-gray-200">
          Phát hành vào ngày {episodeDetails.air_date.slice(8, 10)} tháng{" "}
          {episodeDetails.air_date.slice(5, 7)} năm{" "}
          {episodeDetails.air_date.slice(0, 4)}
        </p>
        <p className="line-clamp-3 text-gray-400">
          {episodeDetails.overview || data.overview}
        </p>

        {/* Tập và mùa  */}
        <div className="my-4 pt-4">
          <div className="lg:flex w-full">
            {/* Chọn mùa  */}

            {/* Select mobile */}
            <div className="py-4 lg:hidden w-1/3">
              <Select
                onChange={(e) => {
                  setSeasons(Number(e));
                }}
                size="lg"
                label="Chọn mùa"
              >
                {seasonsDetails.map((season: any, index: number) => (
                  <Option key={index} value={String(index)}>
                    <Link scroll={false} href={{ query: { season: String(index) } }}>
                      {season.name}
                    </Link>
                  </Option>
                ))}
              </Select>
              <h5 className="mt-4">{data.seasons[seasons].name}</h5>
            </div>

            <div className="lg:block hidden">
              {data.seasons.map((season: any, index: number) => (
                <div
                  onClick={() => {
                    setSeasons(index);
                  }}
                  className={`p-4 w-[250px] rounded-l-xl ring-r-1 ring-primary text-gray-400 ${
                    seasons === index && "bg-primary text-white"
                  }`}
                >
                  <div >
                    <p className="font-bold text-sm">{season.name}</p>
                    <p className="font-semibold">{season.episode_count} Tập</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Chọn tập  */}

            {
            // seasonDetail.name !== data.seasons[seasons].name ? (
            //   <div className="w-full"><Loading /></div>
              
            // ) : 
            (
              <div className="w-full grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-4 lg:px-6 h-min">
                {seasonsDetails[seasons].episodes.map((season: any) => (
                  <div className="relative h-[150px] w-full overflow-hidden rounded-xl">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${season.still_path}`}
                      alt={season.name}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black top-1/4"></div>

                    <div className="absolute grid grid-cols-1 place-content-center w-full h-full justify-items-center">
                      <Link href={`/watch/tv/${data.id}/${data.name}?season=${seasons}&episode=${season.episode_number}`}
                       className="bg-gray-900/50 rounded-full text-center p-2 opacity-70">
                        <BsPlay size="2em" />
                      </Link>
                    </div>

                    <div className="w-full absolute bottom-0 p-2 space-y-1">
                      <p className="text-base line-clamp-1 font-semibold text-gray-300">
                        {season.name} : {season.overview}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Recommendation
          data={recommend.results}
          title="Có thể bạn cũng thích"
          mediatype={"movie"}
        />
      </div>
    </div>
  );
};

export default WatchTvSection;
