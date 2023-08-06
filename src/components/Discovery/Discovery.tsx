"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

const Discovery = ({ data }: any) => {
  console.log(data);
  return (
    <div className="min-h-screen pt-[70px] 2xl:px-[100px] px-4 dark">
      <div className="md:flex justify-between items-center my-3">
        <h3>Khám phá</h3>
        <div className="flex space-x-2">
          <div>sắp xếp theo</div>
          <div>Lọc</div>
        </div>
      </div>

      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
        {data.results.map((i: any) => (
          <div>
            <div className="relative max-w-[230px] h-[345px] bg-blue-500">
              <Image
                src={`https://image.tmdb.org/t/p/w500${i.poster_path}`}
                fill
                alt=""
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 top-1/3"></div>

              <div className="w-full absolute bottom-0 p-2 space-y-1">
                <p className="text-base line-clamp-1 font-semibold text-gray-300">
                  {i.title || i.name}
                </p>
                <div className="flex space-x-2 text-[0.8rem] font-medium">
                  <p className="text-primary capitalize font-semibold">
                    {i.media_type === "movie" ? "Phim lẻ" : "Phim bộ"}
                  </p>
                  <span>-</span>
                  <p className="text-gray-500 truncate"></p>
                </div>
              </div>

              <div className="absolute top-2 right-2 bg-white/20 p-2 text-black rounded-full backdrop-blur-sm hover:bg-white/60 transition ease-in-out duration-300">
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discovery;
