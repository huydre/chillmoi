import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-4">
      <div>logo</div>
      <div className="flex items-center justify-between space-x-4">
        <i className="hover:bg-slate-100/20 p-[6px] rounded-full transition duration-300 ease-in-out">
          <IoMdNotifications size="1.5em" />
        </i>
        <i className="hover:bg-slate-100/20 p-[6px] rounded-full transition duration-300 ease-in-out">
          <FiSearch size="1.5em" />
        </i>
        <div>
          <button className="ring-2 ring-primary text-primary text-sm font-bold px-4 py-1 rounded-lg">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
