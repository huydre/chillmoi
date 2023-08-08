"use client";
import DiscoverIcon from "@/lib/icon/DiscoverIcon";
import HomeIcon from "@/lib/icon/HomeIcon";
import ScheduleIcon from "@/lib/icon/ScheduleIcon";
import React, { useEffect, useState } from "react";
import { Tooltip } from "@material-tailwind/react";
import Library from "@/lib/icon/Library";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Monitor from "@/lib/icon/Monitor";

const Menus = [
  { name: "Trang chủ", icon: <HomeIcon />, path: "/" },
  { name: "Phim lẻ", icon: <Monitor />, path: "/discovery/movie" },
  { name: "Phim bộ", icon: <Library />, path: "/discovery/tv" },
  { name: "Lịch phát sóng", icon: <ScheduleIcon />, path: "/schedule" },
];

const Navbar = () => {
  const pathname = usePathname();

  const [active, setActive] = useState(-1);
  useEffect(() => {
    setActive(-1);
    for (let index = 0; index < Menus.length; index++) {
      if (pathname === Menus[index].path) setActive(index);
    }
  }, [pathname]);
  return (
    <div className=" h-screen sticky md:flex flex-col space-y-4 px-3 py-4 items-center border-r-1 border-gray-900 hidden">
      <a className="mb-4" href="/">
        <Image alt="logo" src={'/logo3.png'} height={50} width={50}/>
      </a>
      {Menus.map((menu, i) => (
        <Tooltip content={menu.name} placement="right">
          <Link
            href={menu.path}
            className={`p-3 rounded-full transition duration-300 ease-in-out scale-110 text-gray-400 ${
              menu.name === "Chủ đề" && "px-4"
            } ${i === active ? "bg-primary  text-white" : "hover:bg-gray-800"}`}
          >
            {menu.icon}
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};

export default Navbar;
