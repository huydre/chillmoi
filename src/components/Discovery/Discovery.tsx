"use client";
import React, { useCallback, useState } from "react";
import {
  Pagination,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { sortBy } from "@/constant";

const Discovery = ({ data, genres, mediatype, title }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectGenres, setSelectGenres] = useState({
    id: searchParams.get("with_genres") || "0",
    name: genres.genres.find((i: any) => i.id == searchParams.get("with_genres"))?.name || "Tất cả",
  });
  const [selectSort, setSelectSort] = useState({
    name: sortBy.find((i) => i.value === searchParams.get("sort_by"))?.name || "Mặc định",
    value: searchParams.get("sort_by") || "",
  });
  const [selectYear, setSelectYear] = useState(searchParams.get("year") || "Tất cả");

  let yearsArray = [];
  for (let year = 2023; year >= 1980; year--) {
    yearsArray.push(year);
  }

  const handlePagination = (e: any) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    current.set("page",e.toString())

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);

  };

  const handleSearch = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (selectGenres.name === "Tất cả") {
      current.delete("with_genres");
    }
    else current.set("with_genres",selectGenres.id.toString())

    if (selectSort.name === "Mặc định") {
      current.delete("sort_by");
    }
    else current.set("sort_by",selectSort.value)

    if (selectYear === "Tất cả") {
      current.delete("year");
    }
    else current.set("year",selectYear)

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  console.log(genres)


  return (
    <div className="min-h-screen dark">
      <div className="relative h-[320px]">
        <Image
          src={"/discovey_banner.jpg"}
          alt="banner"
          fill
          style={{
            objectFit: "cover",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background top-1/3"></div>

        <div className="absolute inset-0 bg-background/40 top-0 bg-blend-overlay"></div>

        <div className="absolute text-center w-full top-1/3">
          <h1 className="text-[2.875rem]">{title}</h1>
          <p className="text-[1.25rem]">
            Khám phá và thưởng thức các bộ phim điện ảnh, series, anime
          </p>
        </div>

        {/* Desktop Catalog  */}
        <div className="absolute w-full -bottom-6 md:flex justify-center flex ">
          <div className=" bg-gray-900 md:py-6 md:px-9 py-3 px-4 rounded-2xl flex space-x-8">
            <ul className="flex space-x-2 md:space-x-6 items-center">
              <li>
                <Popover placement="bottom">
                  <PopoverTrigger>
                    {/* <Button>Thể loại</Button> */}
                    <div className="cursor-pointer">
                      <p className="text-xs text-gray-400">Thể loại</p>
                      <p className="font-semibold text-sm truncate w-[60px] md:w-[100px]">
                        {selectGenres.name}
                      </p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="bg-gray-900 ">
                    <ul className="h-[360px] overflow-y-auto ">
                      {genres.genres.map((genre: any) => (
                        <li>
                          <div
                            onClick={() => {
                              setSelectGenres(genre);
                            }}
                            className={`py-2 px-4 cursor-pointer text-white rounded-xl ${
                              selectGenres.name === genre.name
                                ? "bg-primary"
                                : "hover:bg-gray-800"
                            }`}
                          >
                            {genre.name}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              </li>
              <Divider orientation="vertical" />
              <li>
                <Popover placement="bottom">
                  <PopoverTrigger>
                    <div className="cursor-pointer">
                      <p className="text-xs text-gray-400 truncate">Sắp xếp</p>
                      <p className="font-semibold text-sm truncate max-w-[70px] md:max-w-full">
                        {selectSort.name}
                      </p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="bg-gray-900 max-h-[360px] overflow-y-auto">
                    <ul className="">
                      {sortBy.map((i) => (
                        <li>
                          <div
                            onClick={() => setSelectSort(i)}
                            className={`py-2 px-4 cursor-pointer text-white rounded-xl ${
                              i.value === selectSort.value
                                ? "bg-primary"
                                : "hover:bg-gray-800"
                            }`}
                          >
                            {i.name}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              </li>
              <Divider orientation="vertical" />
              <li>
                <Popover placement="bottom">
                  <PopoverTrigger>
                    <div className="cursor-pointer">
                      <p className="text-xs text-gray-400">Năm</p>
                      <p className="font-semibold text-sm truncate w-[50px]">
                        {selectYear}
                      </p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="bg-gray-900 ">
                    <ul className="h-[360px] overflow-y-scroll">
                      {yearsArray.map((i: any) => (
                        <li>
                          <div
                            onClick={() => {
                              setSelectYear(i);
                            }}
                            className={`py-2 px-4 cursor-pointer text-white rounded-xl ${
                              selectYear == i
                                ? "bg-primary"
                                : "hover:bg-gray-800"
                            }`}
                          >
                            {i}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              </li>
            </ul>
            <div className="hidden md:block">
              <Button onClick={handleSearch} color="primary">
                Tìm kiếm
              </Button>
            </div>
            <div className="w-min md:hidden">
              <Button onClick={handleSearch} isIconOnly color="primary">
                <FiSearch size="1.5em" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 md:pt-24 pt-10 px-4 2xl:px-[100px]">
        {data.results.map((i: any) => (
          <Link href={`/details/${mediatype}/${i.id}/${i.title || i.name}`}>
            <div className="relative max-w-[230px] h-[345px]">
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
                    {mediatype === "movie" ? "Phim lẻ" : "Phim bộ"}
                  </p>
                  <span>-</span>
                  <p className="text-gray-500 truncate"></p>
                </div>
              </div>

              <div className="absolute top-2 right-2 bg-white/20 p-2 text-black rounded-full backdrop-blur-sm hover:bg-white/60 transition ease-in-out duration-300">
                <AiOutlinePlus />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-full flex justify-center mt-6 px-4 2xl:px-[100px]">
        <Pagination
          showControls
          total={data.total_pages}
          initialPage={Number(searchParams.get("page")) || 1}
          onChange={handlePagination}
        />
      </div>
    </div>
  );
};

export default Discovery;
