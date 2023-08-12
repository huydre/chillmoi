import React from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { Genres } from "@/constant";

export default function PosterCard({
    mediatype, data
} : any) {
  return (
    <div className="relative max-w-[230px] h-[345px] cursor-pointer rounded-2xl overflow-hidden">
      <a
        href={
          mediatype
            ? `details/${mediatype}/${data.id}/${data.title || data.name}`
            : `details/${data.media_type}/${data.id}/${data.title || data.name}`
        }
      >
        <Image
          fill
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title || data.name}
          style={{
            objectFit: "cover",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 top-1/3"></div>

        <div className="w-full absolute bottom-0 p-2 space-y-1">
          <p className="text-base line-clamp-1 font-semibold text-gray-300">
            {data.title || data.name}
          </p>
          <div className="flex space-x-2 text-[0.8rem] font-medium">
            <p className="text-primary capitalize font-semibold whitespace-nowrap">
              {(data.media_type || mediatype) === "movie" ? "Phim lẻ" : "Phim bộ"}
            </p>
            <span>-</span>
            <p className="text-gray-500 truncate pr-2">
              {data.genre_ids
                ?.map(
                  (id: number) => Genres.find((item) => item.id === id)?.name
                )
                .join(", ")}
            </p>
          </div>
        </div>

        <div className="absolute top-2 right-2 bg-white/20 p-2 text-black rounded-full backdrop-blur-sm hover:bg-white/60 transition ease-in-out duration-300">
          <AiOutlinePlus />
        </div>
      </a>
    </div>
  );
}
