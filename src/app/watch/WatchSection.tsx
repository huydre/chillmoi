import React from "react";

export interface WatchSectionProps {
    id: string;
}

const WatchSection = ({id}: WatchSectionProps) => {
  return (
    <div className="min-h-screen pt-[100px]">
      <iframe
        src={`https://autoembed.to/movie/tmdb/${id}`}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        className="w-full aspect-video sm: pr-4 pl-4"
      />
    </div>
  );
};

export default WatchSection;
