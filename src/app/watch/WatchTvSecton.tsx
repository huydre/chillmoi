"use client";
import Recommendation from "@/components/shared/Recommendation";
import React from "react";
import { useSearchParams } from "next/navigation";
import SeasonAndEpisode from "@/components/shared/SeasonAndEpisode";

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
  const season = Number(searchParams.get("season")) + 1;

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
          {data.seasons[season-1].name} - {episodeDetails.name}
        </h5>
        <p className="text-gray-200">
          Phát hành vào ngày {episodeDetails.air_date.slice(8, 10)} tháng{" "}
          {episodeDetails.air_date.slice(5, 7)} năm{" "}
          {episodeDetails.air_date.slice(0, 4)}
        </p>
        <p className="line-clamp-3 text-gray-400">
          {episodeDetails.overview || data.overview}
        </p>

        <SeasonAndEpisode data={data} seasonDetail={seasonsDetails} />

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
