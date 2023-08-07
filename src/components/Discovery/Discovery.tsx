"use client";
import React, { useCallback, useState } from "react";
import {
  Pagination,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider
} from "@nextui-org/react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Select, Option } from "@material-tailwind/react";

const Discovery = ({ data, genres }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectGenres, setSelectGenres] = useState({
    id: 0,
    name: "Tất cả",
  });
  const [selectFormat, setSelectFormat] = useState("Tất cả");
  const [selectYear, setSelectYear] = useState("Tất cả");

  const createQueryString = useCallback(
    (name: any, value: any) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  let yearsArray = [];

  // Sử dụng vòng lặp để thêm các số từ 1980 đến 2023 vào mảng
  for (let year = 1960; year <= 2023; year++) {
    yearsArray.push(year);
  }

  const handlePagination = (e: any) => {
    router.replace(pathname + "?" + createQueryString("page", e));
    console.log(e);
  };

  console.log(genres);

  return (
    <div className="min-h-screen 2xl:px-[100px] px-4 dark">
      <div className="relative bg-blue-500 h-[320px]">
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
          <h1 className="text-[2.875rem]">Danh mục</h1>
          <p className="text-[1.25rem]">
            Khám phá và thưởng thức các bộ phim điện ảnh, series, anime
          </p>
        </div>

        <div className="absolute w-full -bottom-6 flex justify-center">
          <div className=" bg-gray-900 py-6 px-9 rounded-2xl flex space-x-8">
            <ul className="flex space-x-6 items-center">
              <li>
                <Popover placement="bottom">
                  <PopoverTrigger>
                    {/* <Button>Thể loại</Button> */}
                    <div className="cursor-pointer">
                      <p className="text-xs text-gray-400">Thể loại</p>
                      <p className="font-semibold truncate w-[100px]">
                        {selectGenres.name}
                      </p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="bg-gray-900 h-[360px] overflow-y-auto pt-14">
                    <ul className="">
                      {genres.genres.map((genre: any) => (
                        <li>
                          <div
                            onClick={() => {
                              setSelectGenres(genre);
                            }}
                            className={`py-2 px-4 cursor-pointer rounded-xl ${
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
                      <p className="text-xs text-gray-400">Định dạng</p>
                      <p className="font-semibold truncate w-[100px]">
                        {(selectFormat === "movie" && "Phim lẻ") ||
                          (selectFormat === "tv" && "Phim bộ") ||
                          selectFormat}
                      </p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="bg-gray-900 max-h-[360px] overflow-y-auto">
                    <ul className="">
                      <li>
                        <div
                          onClick={() => {
                            setSelectFormat("movie");
                          }}
                          className={`py-2 px-4 cursor-pointer rounded-xl ${
                            selectFormat === "movie"
                              ? "bg-primary"
                              : "hover:bg-gray-800"
                          }`}
                        >
                          Phim lẻ
                        </div>
                      </li>
                      <li>
                        <div
                          onClick={() => {
                            setSelectFormat("tv");
                          }}
                          className={`py-2 px-4 cursor-pointer rounded-xl ${
                            selectFormat === "tv"
                              ? "bg-primary"
                              : "hover:bg-gray-800"
                          }`}
                        >
                          Phim bộ
                        </div>
                      </li>
                    </ul>
                  </PopoverContent>
                </Popover>
              </li>
              <Divider orientation="vertical" />
              <li>
                <Popover placement="bottom">
                  <PopoverTrigger>
                    {/* <Button>Thể loại</Button> */}
                    <div className="cursor-pointer">
                      <p className="text-xs text-gray-400">Năm</p>
                      <p className="font-semibold truncate w-[100px]">
                        {selectYear}
                      </p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="bg-gray-900 h-[360px] overflow-y-auto pt-20">
                    <ul className="">
                      {yearsArray.map((i: any) => (
                        <li>
                          <div
                            onClick={() => {
                              setSelectYear(i);
                            }}
                            className={`py-2 px-4 cursor-pointer rounded-xl ${
                              selectYear === i
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
            <div>
              <Button color="primary">Tìm kiếm</Button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="md:flex justify-between items-center my-3">
        <h3>Khám phá</h3>
        <div className="flex space-x-2">
          <div>sắp xếp theo</div>
          <div>Lọc</div>
        </div>
      </div> */}

      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 py-32">
        {data.results.map((i: any) => (
          <Link href={`details/${i.media_type}/${i.id}/${i.title || i.name}`}>
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
          </Link>
        ))}
      </div>

      <div className="w-full flex justify-center mt-6">
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
