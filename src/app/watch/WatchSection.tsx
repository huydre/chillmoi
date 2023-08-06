"use client";
import Recommendation from "@/components/shared/Recommendation";
import React from "react";

export interface WatchSectionProps {
  id: string;
  data: any;
  recommend: any;
}

const WatchSection = ({ id, data, recommend }: WatchSectionProps) => {
  console.log(data);
  return (
    <div className="min-h-screen pt-[70px]">
      <iframe
        src={`https://autoembed.to/movie/tmdb/${id}?server=3`}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        className="w-full aspect-video sm: pr-4 pl-4"
      />
      <div className="space-y-4 pt-8 xl:px-32 px-4">
        <h3>{data.title}</h3>
        <p className="text-gray-200">
          Phát hành vào ngày {data.release_date.slice(8, 10)} tháng{" "}
          {data.release_date.slice(5, 7)} năm {data.release_date.slice(0, 4)}
        </p>
        <p className="line-clamp-3 text-gray-400">{data.overview}</p>
        <Recommendation
          data={recommend.results}
          title="Có thể bạn cũng thích"
          mediatype={"movie"}
        />
      </div>
      
    </div>
  );
};

export default WatchSection;
