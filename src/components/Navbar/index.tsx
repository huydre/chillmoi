"use client";
import DiscoverIcon from "@/lib/icon/DiscoverIcon";
import HomeIcon from "@/lib/icon/HomeIcon";
import ScheduleIcon from "@/lib/icon/ScheduleIcon";
import React, { useEffect, useState } from "react";
import { Tooltip } from "@material-tailwind/react";
import Library from "@/lib/icon/Library";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Menus = [
  { name: "Trang chủ", icon: <HomeIcon />, path: "/" },
  { name: "Khám phá", icon: <DiscoverIcon />, path: "/discovery" },
  { name: "Chủ đề", icon: <Library />, path: "/genres" },
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
    <div className=" h-screen sticky md:flex flex-col space-y-6 px-3 py-4 items-center border-r-2 border-gray-900/30 hidden">
      <a href="/" className="mb-4">
        <Image alt="logo" src={'/logo2.png'} height={50} width={50}/>
      </a>
      {Menus.map((menu, i) => (
        <Tooltip content={menu.name} placement="right">
          <a
            href={menu.path}
            className={`p-2 rounded-xl transition duration-300 ease-in-out  ${
              menu.name === "Chủ đề" && "px-3"
            } ${i === active && "bg-primary"}`}
          >
            {menu.icon}
          </a>
        </Tooltip>
      ))}
      {/* <Tooltip content="Trang chủ" placement="right">
        <a
          href="/"
          className="p-2 rounded-xl transition duration-300 ease-in-out bg-primary"
        >
          <HomeIcon />
        </a>
      </Tooltip>
      <Tooltip content="Khám phá" placement="right">
        <a
          href="/discovery"
          className="p-2 hover:bg-primary/10 rounded-xl transition duration-300 ease-in-out"
        >
          <DiscoverIcon />
        </a>
      </Tooltip>
      <Tooltip content="Chủ đề" placement="right">
        <a
          href="/genres"
          className="p-3 hover:bg-primary/10 rounded-xl transition duration-300 ease-in-out"
        >
          <Library />
        </a>
      </Tooltip>
      <Tooltip content="Lịch phát sóng" placement="right">
        <a
          href="/schedule"
          className="p-2 hover:bg-primary/10 rounded-xl transition duration-300 ease-in-out"
        >
          <ScheduleIcon />
        </a>
      </Tooltip> */}
    </div>
  );
};

export default Navbar;
