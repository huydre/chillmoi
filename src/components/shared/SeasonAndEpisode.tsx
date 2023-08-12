"use client";
import { Select, Option } from "@material-tailwind/react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { BsPlay } from "react-icons/bs";
import { useSearchParams } from "next/navigation";

export interface SeasonAndEpisodeProps {
  data: any;
  seasonDetail: any;
}

export default function SeasonAndEpisode({
  data,
  seasonDetail,
}: SeasonAndEpisodeProps) {
  const searchParams = useSearchParams();

  const [seasons, setSeasons] = useState(
    Number(searchParams.get("season")) || Number(seasonDetail[0].season_number) || 0
  );

  // console.log(seasonDetail)


  return (
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
            {seasonDetail.map((season: any, index: number) => (
              <Option key={index} value={String(index)}>
                <div>{season.name}</div>
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
              className={`p-4 w-[250px] rounded-l-xl cursor-pointer text-gray-400 transition duration-200 ease-in-out ${
                seasons === index
                  ? "bg-primary text-white "
                  : "hover:bg-gray-900"
              }`}
            >
              <div>
                <p className="font-bold text-sm">{season.name}</p>
                <p className="font-medium">{season.episode_count} Tập</p>
              </div>
            </div>
          ))}
        </div>
        {/* Chọn tập  */}

        {
          <div className="w-full grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-4 lg:px-6 h-min">
            {seasonDetail[seasons].episodes.map((season: any) => (
              <div className="relative h-[150px] w-full overflow-hidden rounded-lg">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${season.still_path}`}
                  alt={season.name}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black top-1/3"></div>

                {searchParams.get("season") == String(seasons) &&
                searchParams.get("episode") == season.episode_number ? (
                  <div className="absolute bg-red-500 bottom-0 h-0.5 w-1/3" />
                ) : <></>}

                <div className="absolute grid grid-cols-1 place-content-center w-full h-full justify-items-center">
                  <Link
                    href={`/watch/tv/${data.id}/${data.name}?season=${seasons}&episode=${season.episode_number}`}
                    className="bg-gray-900/50 rounded-full text-center p-2 opacity-70"
                  >
                    {searchParams.get("season") == String(seasons) &&
                    searchParams.get("episode") == season.episode_number ? (
                      <></>
                    ) : (
                      <BsPlay size="2em" />
                    )}
                  </Link>
                </div>

                <div className="w-full absolute bottom-1 p-2 space-y-1">
                  <p className=" line-clamp-1 font-medium text-gray-300 text-sm">
                    {season.name} : {season.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}
