"use client"
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <div
      className={`flex justify-between items-center py-4 px-4 w-full ${
        scrolled ? "bg-[#0E0E10]/25 backdrop-blur-sm" : ""
      }`}
    >
      <a href="/">
        {/* <Image width={120} height={50} src="/text-logo.png" alt="" /> */}
      </a>
      <div className="flex items-center justify-between space-x-6">
        <i className="hover:bg-slate-100/20 p-[6px] rounded-full transition duration-300 ease-in-out">
          <IoMdNotifications size="1.5em" />
        </i>
        <i className="hover:bg-slate-100/20 p-[6px] rounded-full transition duration-300 ease-in-out">
          <FiSearch size="1.5em" />
        </i>
        <div>
          <button className="ring-2 ring-primary text-sm font-semibold px-2 py-1 rounded-lg hover:bg-primary hover:text-black transition duration-200 ease-in-out">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
