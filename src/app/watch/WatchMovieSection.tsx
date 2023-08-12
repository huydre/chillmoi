"use client";
import Recommendation from "@/components/shared/Recommendation";
import React from "react";
import Comment from "@/components/shared/Comment";
import { Tabs, Tab } from "@nextui-org/react";

export interface WatchSectionProps {
  id: string;
  data: any;
  recommend: any;
  reviews: any;
  similar: any;
}

const WatchMovieSection = ({
  id,
  data,
  recommend,
  reviews,
  similar,
}: WatchSectionProps) => {
  const server = [
    {
      id: 1,
      label: "Server 1",
      url: `https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`,
    },
    {
      id: 2,
      label: "Server 2",
      url: `https://autoembed.to/movie/tmdb/${id}?server=3`,
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
      {/* <iframe
        src={`https://autoembed.to/movie/tmdb/${id}?server=3`}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        className="w-full aspect-video sm: pr-4 pl-4"
      /> */}
      {/* <iframe 
        src={`https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        className="w-full aspect-video sm: pr-4 pl-4"
      /> */}
      <div className="space-y-4 pt-8 xl:px-32 px-4">
        <h3>{data.title}</h3>
        <p className="text-gray-200">
          Phát hành vào ngày {data.release_date.slice(8, 10)} tháng{" "}
          {data.release_date.slice(5, 7)} năm {data.release_date.slice(0, 4)}
        </p>
        <p className="line-clamp-3 text-gray-400">{data.overview}</p>

        {/* Similar  */}
        <Recommendation
          data={similar.results}
          title="Nôi dung tương tự"
          mediatype={"movie"}
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

export default WatchMovieSection;
