"use client";
import Layout from "@/components/shared/Layout";
import React from "react";
import Image from "next/image";
import { DetailMovieInterface } from "@/lib/interface";

interface DetailMovieProps {
  data: DetailMovieInterface;
}

const DetailMovie: React.FC<DetailMovieProps> = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <div>
        <div className="relative md:h-[500px] h-[450px] bg-black/40 bg-blend-overlay">
          <Image
            fill
            src={` https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt={data.original_title}
            style={{
              objectFit: "cover",
            }}
            className="-z-10 "
          />
          <div className="mx-[124px] pt-20 space-y-6 max-w-[600px]">
            <h1 className="line-clamp-2">{data.title}</h1>
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
              <button className="ring-2 ring-primary bg-primary text-sm font-semibold px-3 py-1 rounded-lg  transition duration-200 ease-in-out">
                Xem ngay
              </button>
              <button className="ring-2 ring-white text-sm font-semibold px-3 py-1 rounded-lg hover:bg-white hover:text-black transition duration-200 ease-in-out">
                + Danh sách
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailMovie;
