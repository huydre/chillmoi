"use client";
import Recommendation from "@/components/shared/Recommendation";
import React from "react";
import { useSearchParams } from "next/navigation";
import SeasonAndEpisode from "@/components/shared/SeasonAndEpisode";
import Comment from "@/components/shared/Comment";
import { Tab, Tabs } from "@nextui-org/react";

export interface WatchSectionProps {
  id: string;
  data: any;
  recommend: any;
  episodeDetails: any;
  seasonsDetails: any;
  reviews: any;
  similar: any;
}

const WatchTvSection = ({
  id,
  data,
  recommend,
  episodeDetails,
  seasonsDetails,
  reviews,
  similar,
}: WatchSectionProps) => {
  const searchParams = useSearchParams();
  const season = seasonsDetails[0].season_number == 1 ? Number(searchParams.get("season")) : Number(searchParams.get("season")) + 1;
  const server = [
    {
      id: 1,
      label: "Server 1",
      url: `https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1&s=${season}&e=${searchParams.get("episode")}`,
    },
    {
      id: 2,
      label: "Server 2",
      url: `https://autoembed.to/tv/tmdb/${id}-${season}-${searchParams.get("episode")}?server=3`,
    },
  ];

  return (
    <div className="min-h-screen pt-[70px] dark">
      <div>
        <Tabs className="pl-4" color="primary" aria-label="Dynamic tabs" items={server}>
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <iframe
                src={item.url}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="w-full aspect-video sm: pr-4 pl-4 pt-4"
              />
            </Tab>
          )}
        </Tabs>
      </div>
      <div className="space-y-4 pt-8 xl:px-32 px-4">
        <h3>{data.name}</h3>
        <h5>
          {data.seasons[season - 1].name} - {episodeDetails.name}
        </h5>
        <p className="text-gray-200">
          Phát hành vào ngày {episodeDetails.air_date?.slice(8, 10)} tháng{" "}
          {episodeDetails.air_date?.slice(5, 7)} năm{" "}
          {episodeDetails.air_date?.slice(0, 4)}
        </p>
        <p className="line-clamp-3 text-gray-400">
          {episodeDetails.overview || data.overview}
        </p>

        <SeasonAndEpisode data={data} seasonDetail={seasonsDetails} />

        {/* Similar  */}
        <Recommendation
          data={similar.results}
          title="Nôi dung tương tự"
          mediatype={"tv"}
        />

        <Recommendation
          data={recommend.results}
          title="Có thể bạn cũng thích"
          mediatype={"movie"}
        />

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

export default WatchTvSection;
