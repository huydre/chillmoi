"use client";
import DiscoverIcon from "@/lib/icon/DiscoverIcon";
import HomeIcon from "@/lib/icon/HomeIcon";
import ScheduleIcon from "@/lib/icon/ScheduleIcon";
import Logo from "@/lib/icon/Logo";
import React from "react";
import { Tooltip } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div className=" h-screen sticky md:flex flex-col space-y-6 px-3 py-4 items-center border-r-2 border-gray-900/30 hidden">
      <div className="mb-4">
        <Logo />
      </div>
      <Tooltip content="Trang chủ" placement="right">
        <button className="p-2 rounded-xl transition duration-300 ease-in-out bg-primary">
          <HomeIcon />
        </button>
      </Tooltip>
      <Tooltip content="Khám phá" placement="right">
        <button className="p-2 hover:bg-primary/10 rounded-xl transition duration-300 ease-in-out">
          <DiscoverIcon />
        </button>
      </Tooltip>
      <Tooltip content="Lịch phát sóng" placement="right">
        <button className="p-2 hover:bg-primary/10 rounded-xl transition duration-300 ease-in-out">
          <ScheduleIcon />
        </button>
      </Tooltip>
    </div>
  );
};

export default Navbar;
