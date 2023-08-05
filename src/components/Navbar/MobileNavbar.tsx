"use client";
import DiscoverIcon from "@/lib/icon/DiscoverIcon";
import HomeIcon from "@/lib/icon/HomeIcon";
import ScheduleIcon from "@/lib/icon/ScheduleIcon";
import React, { useEffect, useState } from "react";
import Library from "@/lib/icon/Library";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavbar() {
  const pathname = usePathname();

  const Menus = [
    { name: "Trang chủ", icon: <HomeIcon />, dis: "translate-x-10", path: "/" },
    { name: "Khám phá", icon: <DiscoverIcon />, dis: "translate-x-32", path: "/discovery" },
    { name: "Chủ đề", icon: <Library />, dis: "translate-x-52", path: "/genres" },
    { name: "Lịch phát sóng", icon: <ScheduleIcon />, dis: "translate-x-72", path: "/schedule" },
  ];

  const [active, setActive] = useState(-1);

  useEffect(() => {
    setActive(-1)
    for (let index = 0; index < Menus.length; index++) {
      if (pathname === Menus[index].path) setActive(index);
    }
  },[pathname])

  return (
    <div className="bg-[#0E0E10] h-[4rem] px-6 rounded-t-xl md:hidden">
      <ul className="flex relative justify-around">
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <Link
              href={menu.path}
              className="flex flex-col text-center pt-6"
            >
              <span
                className={`text-xl cursor-pointer duration-500 flex justify-center ${
                  i === active && "-mt-12 text-white "
                }`}
              >
                <div
                  className={
                    i === active
                      ? `bg-primary ring-2 ring-[#0E0E10] rounded-full p-2  ${
                          menu.name === "Chủ đề" && "px-3"
                        }`
                      : ""
                  }
                >
                  {menu.icon}
                </div>
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-1 duration-700 opacity-100"
                    : "opacity-0 translate-y-6"
                } `}
              >
                <p className="text-xs">{menu.name}</p>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
